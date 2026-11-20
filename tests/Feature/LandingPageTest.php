<?php

namespace Tests\Feature;

use App\Models\ContactLead;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class LandingPageTest extends TestCase
{
    use RefreshDatabase;

    public function test_landing_page_renders_successfully(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertSee('Webyotic');
        $response->assertSee('id="root"', false);
    }

    public function test_health_check_endpoint(): void
    {
        $response = $this->get('/health');

        $response->assertStatus(200);
        $response->assertJson([
            'status' => 'healthy',
            'service' => 'Webyotic Landing Page',
        ]);
    }

    public function test_contact_lead_submission_success(): void
    {
        $payload = [
            'name' => 'Rahul Sharma',
            'email' => 'rahul@example.com',
            'phone' => '+91 98765 12345',
            'company' => 'Sharma Logistics',
            'service' => 'Laravel Development',
            'budget' => '₹25,000 - ₹50,000',
            'message' => 'We need an automated transport and logistics dispatch system.',
        ];

        $response = $this->postJson('/api/contact', $payload);

        $response->assertStatus(201);
        $response->assertJson([
            'success' => true,
        ]);

        $this->assertDatabaseHas('contact_leads', [
            'name' => 'Rahul Sharma',
            'email' => 'rahul@example.com',
            'service' => 'Laravel Development',
        ]);
    }

    public function test_contact_lead_validation_fails_on_missing_fields(): void
    {
        $response = $this->postJson('/api/contact', []);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['name', 'email', 'service', 'message']);
    }
}
