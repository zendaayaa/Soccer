<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2>Get In Touch</h2>
        <p class="subtitle">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>

      <div class="contact-wrapper">
        <!-- Contact Information -->
        <div class="contact-info glass elevate">
          <h3>Contact Information</h3>
          <p class="info-subtitle">Reach out to us through any of these channels</p>

          <div class="info-items">
            <div class="info-item">
              <div class="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="info-content">
                <h4>Address</h4>
                <p>{{ contactData.address }}</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="info-content">
                <h4>Phone</h4>
                <p>{{ contactData.phone }}</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="info-content">
                <h4>Email</h4>
                <p>{{ contactData.email }}</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 6V12L16 14" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="info-content">
                <h4>Working Hours</h4>
                <p>{{ contactData.workingHours }}</p>
              </div>
            </div>
          </div>

          <!-- Social Media Links -->
          <div class="social-links">
            <h4>Follow Us</h4>
            <div class="social-icons">
              <a v-for="social in contactData.socialMedia" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer" class="social-icon">
                <span v-html="social.icon"></span>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form-wrapper glass elevate">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <label for="name">Full Name *</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name" 
                required 
                placeholder="John Doe"
              />
            </div>

            <div class="form-group">
              <label for="email">Email Address *</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                required 
                placeholder="john@example.com"
              />
            </div>

            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                v-model="formData.phone" 
                placeholder="+254 712 345 678"
              />
            </div>

            <div class="form-group">
              <label for="subject">Subject *</label>
              <input 
                type="text" 
                id="subject" 
                v-model="formData.subject" 
                required 
                placeholder="What is this regarding?"
              />
            </div>

            <div class="form-group">
              <label for="message">Message *</label>
              <textarea 
                id="message" 
                v-model="formData.message" 
                required 
                rows="6"
                placeholder="Tell us more about your inquiry..."
              ></textarea>
            </div>

            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else>Sending...</span>
            </button>

            <!-- Success/Error Messages -->
            <div v-if="submitStatus === 'success'" class="status-message success">
              ✓ Message sent successfully! We'll get back to you soon.
            </div>
            <div v-if="submitStatus === 'error'" class="status-message error">
              ✗ Something went wrong. Please try again.
            </div>
          </form>
        </div>
      </div>

      <!-- Map Section (Optional) -->
      <div class="map-section">
        <h3>Find Us Here</h3>
        <div class="map-placeholder">
          <p>Map will be integrated here</p>
          <small>Google Maps or OpenStreetMap iframe</small>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import strapiService from '@/services/strapi';

// TypeScript Interface for Strapi Contact Data
interface StrapiContactData {
  id: number;
  attributes: {
    address: string;
    phone: string;
    email: string;
    workingHours: string;
    socialMedia: Array<{
      name: string;
      url: string;
      icon: string;
    }>;
  };
}

// Contact Data fetched from Strapi
const contactData = reactive({
  address: '',
  phone: '',
  email: '',
  workingHours: '',
  socialMedia: [] as Array<{ name: string; url: string; icon: string }>,
});

// Form Data
const formData = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const submitStatus = ref<'idle' | 'success' | 'error'>('idle');

// Handle Form Submission
const handleSubmit = async () => {
  isSubmitting.value = true;
  submitStatus.value = 'idle';

  try {
    await strapiService.submitContactForm({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    });

    submitStatus.value = 'success';
    
    // Reset form
    formData.name = '';
    formData.email = '';
    formData.phone = '';
    formData.subject = '';
    formData.message = '';

    // Clear success message after 5 seconds
    setTimeout(() => {
      submitStatus.value = 'idle';
    }, 5000);

  } catch (error) {
    console.error('Error submitting form:', error);
    submitStatus.value = 'error';
    
    // Clear error message after 5 seconds
    setTimeout(() => {
      submitStatus.value = 'idle';
    }, 5000);
  } finally {
    isSubmitting.value = false;
  }
};

// Fetch contact data from Strapi
const fetchContactData = async () => {
  try {
    const data = await strapiService.getContactInfo();
    Object.assign(contactData, data.data.attributes);
  } catch (error) {
    console.error('Error fetching contact data:', error);
  }
};

onMounted(fetchContactData);
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.contact-section {
  min-height: 100vh;
  padding: 80px 40px;
  background: linear-gradient(135deg, #0d5f2e 0%, #1a1a1a 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #faf9f9;
  margin-bottom: 15px;
}

.subtitle {
  font-size: 1.1rem;
  color: #d1d5db;
  max-width: 600px;
  margin: 0 auto;
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;
  margin-bottom: 60px;
}

/* Contact Information */
.contact-info {
  background: linear-gradient(135deg, #0d5f2e 0%, #1a1a1a 100%);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-info h3 {
  font-size: 1.8rem;
  color: #22c55e;
  margin-bottom: 10px;
}

.info-subtitle {
  color: #9ca3af;
  margin-bottom: 30px;
  font-size: 0.95rem;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 40px;
}

.info-item {
  display: flex;
  gap: 15px;
  align-items: flex-start;
}

.info-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background: rgba(34, 197, 94, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-content h4 {
  font-size: 1.1rem;
  color: #f3efef;
  margin-bottom: 5px;
}

.info-content p {
  color: #d1d5db;
  font-size: 0.95rem;
  line-height: 1.6;
}

.social-links {
  border-top: 1px solid rgba(34, 197, 94, 0.2);
  padding-top: 30px;
}

.social-links h4 {
  font-size: 1.1rem;
  color: #f3efef;
  margin-bottom: 15px;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icon {
  width: 44px;
  height: 44px;
  background: rgba(34, 197, 94, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #22c55e;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-icon:hover {
  background: #22c55e;
  color: #1a1a1a;
  transform: translateY(-3px);
}

/* Contact Form */
.contact-form-wrapper {
  background: linear-gradient(135deg, #0d5f2e 0%, #1a1a1a 100%);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 0.95rem;
  font-weight: 600;
  color: #f3efef;
}

.form-group input,
.form-group textarea {
  padding: 12px 16px;
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 8px;
  font-size: 1rem;
  background: rgba(0, 0, 0, 0.2);
  color: #f3efef;
  transition: all 0.3s ease;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #6b7280;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #22c55e;
  background: rgba(0, 0, 0, 0.3);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
}

.submit-btn {
  padding: 14px 32px;
  background: #22c55e;
  color: #1a1a1a;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  background: #16a34a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.status-message {
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
}

.status-message.success {
  background: rgba(34, 197, 94, 0.2);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.status-message.error {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

/* Map Section */
.map-section {
  margin-top: 40px;
}

.map-section h3 {
  font-size: 1.8rem;
  color: #f3efef;
  margin-bottom: 20px;
  text-align: center;
}

.map-placeholder {
  background: linear-gradient(135deg, #0d5f2e 0%, #1a1a1a 100%);
  border-radius: 12px;
  padding: 80px 40px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px dashed rgba(34, 197, 94, 0.3);
}

.map-placeholder p {
  font-size: 1.2rem;
  color: #d1d5db;
  margin-bottom: 10px;
}

.map-placeholder small {
  color: #6b7280;
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 968px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 60px 20px;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .contact-info,
  .contact-form-wrapper {
    padding: 30px 20px;
  }

  .social-icons {
    flex-wrap: wrap;
  }
}
</style>