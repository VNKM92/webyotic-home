<?php

namespace App\Http\Controllers;

use App\Models\ContactLead;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Store a new contact or project enquiry lead.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100',
            'email' => 'required|email|max:150',
            'phone' => 'nullable|string|max:30',
            'company' => 'nullable|string|max:100',
            'service' => 'required|string|max:100',
            'budget' => 'nullable|string|max:50',
            'message' => 'required|string|max:3000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors(),
                'message' => 'Please fill in all required fields properly.',
            ], 422);
        }

        try {
            $lead = ContactLead::create([
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'company' => $request->company,
                'service' => $request->service,
                'budget' => $request->budget,
                'message' => $request->message,
                'ip_address' => $request->ip(),
                'status' => 'new',
            ]);

            Log::info("New Webyotic Lead received: {$lead->name} ({$lead->email}) - Service: {$lead->service}");

            return response()->json([
                'success' => true,
                'message' => 'Thank you! Your enquiry has been received. Our team will contact you within 2-4 business hours.',
                'lead_id' => $lead->id,
            ], 201);
        } catch (\Exception $e) {
            Log::error('Contact Lead submission error: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'An error occurred while sending your enquiry. Please reach out to us via WhatsApp or direct email.',
            ], 500);
        }
    }

    /**
     * Health check endpoint for Render / cloud deployment monitoring.
     */
    public function health()
    {
        return response()->json([
            'status' => 'healthy',
            'service' => 'Webyotic Landing Page',
            'timestamp' => now()->toIso8601String(),
            'php_version' => PHP_VERSION,
            'environment' => config('app.env'),
        ]);
    }
}
