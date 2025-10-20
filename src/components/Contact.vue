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
        <div class="contact-info">
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
        <div class="contact-form-wrapper">
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
import { ref, reactive } from 'vue';

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

// Contact Data - Replace with Strapi API call
const contactData = reactive({
  address: 'Kisumu Sports Complex, Kisumu, Kenya',
  phone: '+254 712 345 678',
  email: 'info@aztecsports.com',
  workingHours: 'Mon - Fri: 8:00 AM - 6:00 PM',
  socialMedia: [
    {
      name: 'Facebook',
      url: 'https://facebook.com/aztecsports',
      icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/aztecsports',
      icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/aztecsports',
      icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/aztecsports',
      icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>'
    }
  ]
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
    // TODO: Replace with your actual Strapi API endpoint
    // const response = await fetch(`${import.meta.env.VITE_STRAPI_URL}/api/contact-submissions`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     data: {
    //       name: formData.name,
    //       email: formData.email,
    //       phone: formData.phone,
    //       subject: formData.subject,
    //       message: formData.message,
    //     }
    //   })
    // });

    // if (!response.ok) throw new Error('Failed to submit');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

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
// const fetchContactData = async () => {
//   try {
//     const response = await fetch(`${import.meta.env.VITE_STRAPI_URL}/api/contact-info?populate=*`);
//     const data = await response.json();
//     Object.assign(contactData, data.data.attributes);
//   } catch (error) {
//     console.error('Error fetching contact data:', error);
//   }
// };
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