<template>
  <section id="membership" class="membership-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2>Membership Plans</h2>
        <p class="subtitle">Choose the perfect plan for your athletic journey</p>
      </div>

      <!-- Membership Plans Grid -->
      <div class="plans-grid">
        <div 
          v-for="plan in membershipPlans" 
          :key="plan.id"
          class="plan-card"
          :class="{ 'featured': plan.featured }"
        >
          <!-- Featured Badge -->
          <div v-if="plan.featured" class="featured-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
            Most Popular
          </div>

          <!-- Plan Header -->
          <div class="plan-header">
            <div class="plan-icon">{{ plan.icon }}</div>
            <h3 class="plan-name">{{ plan.name }}</h3>
            <p class="plan-description">{{ plan.description }}</p>
          </div>

          <!-- Pricing -->
          <div class="pricing">
            <span class="currency">KES</span>
            <span class="amount">{{ plan.price }}</span>
            <span class="period">/{{ plan.period }}</span>
          </div>

          <!-- Features List -->
          <ul class="features-list">
            <li v-for="(feature, index) in plan.features" :key="index" class="feature-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="check-icon">
                <path d="M20 6L9 17L4 12" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>{{ feature }}</span>
            </li>
          </ul>

          <!-- CTA Button -->
          <button 
            @click="selectPlan(plan)" 
            class="cta-button"
            :class="{ 'featured-button': plan.featured }"
          >
            {{ plan.buttonText }}
          </button>
        </div>
      </div>

      <!-- Benefits Section -->
      <div class="benefits-section">
        <h3>Membership Benefits</h3>
        <div class="benefits-grid">
          <div v-for="benefit in benefits" :key="benefit.title" class="benefit-card">
            <div class="benefit-icon">{{ benefit.icon }}</div>
            <h4>{{ benefit.title }}</h4>
            <p>{{ benefit.description }}</p>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="faq-section">
        <h3>Frequently Asked Questions</h3>
        <div class="faq-list">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="faq-item"
            :class="{ 'active': activeFaq === index }"
          >
            <div class="faq-question" @click="toggleFaq(index)">
              <h4>{{ faq.question }}</h4>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                class="faq-arrow"
                :class="{ 'rotated': activeFaq === index }"
              >
                <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="faq-answer" v-show="activeFaq === index">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="cta-section">
        <h3>Ready to Get Started?</h3>
        <p>Join our community of athletes and take your training to the next level</p>
        <button @click="scrollToPlans" class="primary-cta">Choose Your Plan</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

// TypeScript Interfaces
interface MembershipPlan {
  id: number;
  name: string;
  description: string;
  icon: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  featured: boolean;
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

// Membership Plans - Replace with Strapi API call
const membershipPlans = ref<MembershipPlan[]>([
  {
    id: 1,
    name: 'Starter',
    description: 'Perfect for beginners getting started',
    icon: '🌱',
    price: '2,500',
    period: 'month',
    features: [
      '2 training sessions per week',
      'Access to basic facilities',
      'Group training only',
      'Basic equipment usage',
      'Monthly progress report'
    ],
    buttonText: 'Get Started',
    featured: false
  },
  {
    id: 2,
    name: 'Athlete',
    description: 'Our most popular choice for serious athletes',
    icon: '⚡',
    price: '4,500',
    period: 'month',
    features: [
      '4 training sessions per week',
      'Full facility access',
      'Group & semi-private training',
      'Premium equipment access',
      'Nutrition guidance',
      'Weekly progress tracking',
      'Priority booking'
    ],
    buttonText: 'Choose Athlete',
    featured: true
  },
  {
    id: 3,
    name: 'Elite',
    description: 'Premium package for competitive athletes',
    icon: '🏆',
    price: '7,500',
    period: 'month',
    features: [
      'Unlimited training sessions',
      'VIP facility access',
      'One-on-one coaching',
      'All equipment & facilities',
      'Personalized nutrition plan',
      'Daily progress monitoring',
      'Competition preparation',
      'Recovery & wellness sessions',
      'Priority support 24/7'
    ],
    buttonText: 'Go Elite',
    featured: false
  }
]);

// Benefits
const benefits = reactive<Benefit[]>([
  {
    icon: '💪',
    title: 'Expert Coaching',
    description: 'Train with certified coaches who have years of experience in developing champion athletes.'
  },
  {
    icon: '🏋️',
    title: 'World-Class Facilities',
    description: 'Access state-of-the-art equipment and training facilities designed for peak performance.'
  },
  {
    icon: '👥',
    title: 'Community Support',
    description: 'Join a vibrant community of like-minded athletes who motivate and inspire each other.'
  },
  {
    icon: '📊',
    title: 'Progress Tracking',
    description: 'Monitor your improvement with detailed analytics and personalized performance reports.'
  },
  {
    icon: '🎯',
    title: 'Flexible Scheduling',
    description: 'Book training sessions that fit your schedule with our convenient online booking system.'
  },
  {
    icon: '🥇',
    title: 'Competition Ready',
    description: 'Prepare for competitions with specialized training programs and mental conditioning.'
  }
]);

// FAQs
const faqs = reactive<FAQ[]>([
  {
    question: 'Can I change my membership plan later?',
    answer: 'Yes! You can upgrade or downgrade your membership plan at any time. Changes will take effect at the start of your next billing cycle.'
  },
  {
    question: 'Is there a commitment period?',
    answer: 'We offer both monthly and annual memberships. Monthly plans have no long-term commitment, while annual plans offer a 15% discount.'
  },
  {
    question: 'What happens if I miss a training session?',
    answer: 'We understand life happens! You can reschedule your session up to 24 hours in advance. Athlete and Elite members can carry over unused sessions to the following month.'
  },
  {
    question: 'Do you offer family or group discounts?',
    answer: 'Yes! We offer a 10% discount for families with multiple members and special rates for groups of 5 or more. Contact us for details.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept M-Pesa, bank transfers, credit/debit cards, and cash payments. All memberships can be paid monthly, quarterly, or annually.'
  },
  {
    question: 'Can I freeze my membership?',
    answer: 'Yes, members can freeze their membership for up to 3 months per year due to injury, travel, or other circumstances. Contact our support team to arrange this.'
  }
]);

const activeFaq = ref<number | null>(null);

// Methods
const selectPlan = (plan: MembershipPlan) => {
  console.log('Selected plan:', plan);
  // TODO: Implement plan selection logic (navigate to registration/payment)
  // router.push(`/register?plan=${plan.id}`)
};

const toggleFaq = (index: number) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};

const scrollToPlans = () => {
  const plansElement = document.querySelector('.plans-grid');
  plansElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// Fetch membership data from Strapi
// const fetchMembershipPlans = async () => {
//   try {
//     const response = await fetch(`${import.meta.env.VITE_STRAPI_URL}/api/membership-plans?populate=*`);
//     const data = await response.json();
//     membershipPlans.value = data.data.map((item: any) => ({
//       id: item.id,
//       name: item.attributes.name,
//       description: item.attributes.description,
//       icon: item.attributes.icon,
//       price: item.attributes.price,
//       period: item.attributes.period,
//       features: item.attributes.features,
//       buttonText: item.attributes.buttonText,
//       featured: item.attributes.featured
//     }));
//   } catch (error) {
//     console.error('Error fetching membership plans:', error);
//   }
// };
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.membership-section {
  min-height: 100vh;
  padding: 80px 40px;
  background: linear-gradient(135deg, #0d5f2e 0%, #1a1a1a 100%);
}

.container {
  max-width: 1400px;
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
}

/* Plans Grid */
.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
}

.plan-card {
  background: linear-gradient(135deg, #0d5f2e 0%, #1a1a1a 100%);
  border-radius: 16px;
  padding: 40px 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  border: 2px solid rgba(34, 197, 94, 0.2);
}

.plan-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.plan-card.featured {
  border-color: #22c55e;
  box-shadow: 0 8px 16px rgba(34, 197, 94, 0.2);
}

.featured-badge {
  position: absolute;
  top: -12px;
  right: 20px;
  background: #22c55e;
  color: #1a1a1a;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
}

.plan-header {
  text-align: center;
  margin-bottom: 30px;
}

.plan-icon {
  font-size: 3.5rem;
  margin-bottom: 15px;
}

.plan-name {
  font-size: 1.8rem;
  color: #f3efef;
  margin-bottom: 10px;
  font-weight: 700;
}

.plan-description {
  color: #9ca3af;
  font-size: 0.95rem;
}

.pricing {
  text-align: center;
  margin-bottom: 30px;
  padding: 20px 0;
  border-top: 1px solid rgba(34, 197, 94, 0.2);
  border-bottom: 1px solid rgba(34, 197, 94, 0.2);
}

.currency {
  color: #22c55e;
  font-size: 1.2rem;
  font-weight: 600;
  vertical-align: top;
}

.amount {
  color: #22c55e;
  font-size: 3rem;
  font-weight: 700;
}

.period {
  color: #9ca3af;
  font-size: 1rem;
}

.features-list {
  list-style: none;
  margin-bottom: 30px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 15px;
  color: #d1d5db;
  font-size: 0.95rem;
}

.check-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.cta-button {
  width: 100%;
  padding: 14px 24px;
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border: 2px solid #22c55e;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: #22c55e;
  color: #1a1a1a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
}

.featured-button {
  background: #22c55e;
  color: #1a1a1a;
}

.featured-button:hover {
  background: #16a34a;
}

/* Benefits Section */
.benefits-section {
  margin-bottom: 80px;
}

.benefits-section h3 {
  font-size: 2rem;
  color: #f3efef;
  text-align: center;
  margin-bottom: 40px;
  font-weight: 700;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.benefit-card {
  background: linear-gradient(135deg, #0d5f2e 0%, #1a1a1a 100%);
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.benefit-card:hover {
  transform: translateY(-5px);
  border-color: #22c55e;
}

.benefit-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.benefit-card h4 {
  font-size: 1.3rem;
  color: #22c55e;
  margin-bottom: 10px;
  font-weight: 600;
}

.benefit-card p {
  color: #d1d5db;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* FAQ Section */
.faq-section {
  margin-bottom: 80px;
}

.faq-section h3 {
  font-size: 2rem;
  color: #f3efef;
  text-align: center;
  margin-bottom: 40px;
  font-weight: 700;
}

.faq-list {
  max-width: 900px;
  margin: 0 auto;
}

.faq-item {
  background: linear-gradient(135deg, #0d5f2e 0%, #1a1a1a 100%);
  border-radius: 12px;
  margin-bottom: 15px;
  overflow: hidden;
  border: 1px solid rgba(34, 197, 94, 0.2);
  transition: all 0.3s ease;
}

.faq-item.active {
  border-color: #22c55e;
}

.faq-question {
  padding: 20px 25px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.faq-question:hover {
  background: rgba(34, 197, 94, 0.05);
}

.faq-question h4 {
  font-size: 1.1rem;
  color: #f3efef;
  font-weight: 600;
}

.faq-arrow {
  color: #22c55e;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.faq-arrow.rotated {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 25px 20px;
}

.faq-answer p {
  color: #d1d5db;
  line-height: 1.7;
  font-size: 0.95rem;
}

/* CTA Section */
.cta-section {
  text-align: center;
  background: linear-gradient(135deg, #0d5f2e 0%, #1a1a1a 100%);
  padding: 60px 40px;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 2px solid #22c55e;
}

.cta-section h3 {
  font-size: 2.2rem;
  color: #f3efef;
  margin-bottom: 15px;
  font-weight: 700;
}

.cta-section p {
  font-size: 1.1rem;
  color: #d1d5db;
  margin-bottom: 30px;
}

.primary-cta {
  padding: 16px 48px;
  background: #22c55e;
  color: #1a1a1a;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary-cta:hover {
  background: #16a34a;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(34, 197, 94, 0.4);
}

/* Responsive */
@media (max-width: 768px) {
  .membership-section {
    padding: 60px 20px;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .plans-grid {
    grid-template-columns: 1fr;
  }

  .plan-card {
    padding: 30px 20px;
  }

  .benefits-section h3,
  .faq-section h3 {
    font-size: 1.6rem;
  }

  .cta-section {
    padding: 40px 20px;
  }

  .cta-section h3 {
    font-size: 1.8rem;
  }
}
</style>