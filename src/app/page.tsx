"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, BookOpen, Facebook, Globe, GraduationCap, HelpCircle, Instagram, Lightbulb, Mail, MessageCircle, Microscope, Palette, Star, Trophy, Twitter, Users, Youtube } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="small"
      sizing="large"
      background="animatedAurora"
      cardStyle="solid-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://pixabay.com/get/g159fb476456282251820d97255793414a877d5a7577313d3f654deac0cde033c2b38cbf9f1ec65dc42046cbc8b0c7c5a2b54ed9cf47373a6ff3c41cd1bb18ce4_1280.jpg"
          logoAlt="School Logo"
          brandName="Excellence Academy"
          button={{
            text: "Enroll Now",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Excellence in Education"
          description="Empowering students to reach their full potential through innovative learning, dedicated teachers, and a supportive community environment"
          tag="Welcome to Excellence Academy"
          tagIcon={GraduationCap}
          buttons={[
            {
              text: "Enroll Today",
              href: "contact"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          imageSrc="https://pixabay.com/get/g4f9586c66bd1de9eccec322470b5eddd228b2a55626ea9f5508a974f1de267e6e2327c3bbd2668ee08ce3bbabfa2eb4adff3011bbafc2f4e4c9b351916e89696_1280.jpg"
          imageAlt="Excellence Academy campus with students"
          frameStyle="card"
        />
      </div>
      
      <div id="about" data-section="about">
        <AboutFeature
          title="We believe in nurturing every student's unique potential through innovative teaching methods, personalized attention, and a comprehensive curriculum that prepares them for future success"
          features={[
            {
              icon: BookOpen,
              title: "Academic Excellence",
              description: "Rigorous curriculum designed to challenge and inspire students, fostering critical thinking and analytical skills essential for higher education and career success"
            },
            {
              icon: Users,
              title: "Personalized Learning",
              description: "Small class sizes and individualized attention ensure every student receives the support they need to thrive academically and personally"
            },
            {
              icon: Trophy,
              title: "Holistic Development",
              description: "Comprehensive programs including arts, sports, and extracurricular activities that develop well-rounded individuals prepared for life's challenges"
            },
            {
              icon: Lightbulb,
              title: "Innovation Focus",
              description: "Cutting-edge technology and modern teaching methods create an engaging learning environment that prepares students for the digital future"
            }
          ]}
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardFive
          title="Our Programs"
          description="Comprehensive educational programs designed to develop every aspect of student potential"
          tag="Academic Excellence"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          showIconBoxBackground={true}
          features={[
            {
              title: "STEM Education",
              icon: Microscope
            },
            {
              title: "Arts & Creativity",
              icon: Palette
            },
            {
              title: "Athletics & Sports",
              icon: Trophy
            },
            {
              title: "Language Programs",
              icon: Globe
            }
          ]}
        />
      </div>
      
      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Our Achievements"
          description="Numbers that reflect our commitment to educational excellence"
          tag="Success Stories"
          tagIcon={Award}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="opacity"
          metrics={[
            {
              id: "1",
              icon: Users,
              title: "Students",
              value: "1,200+"
            },
            {
              id: "2",
              icon: GraduationCap,
              title: "Graduation Rate",
              value: "98%"
            },
            {
              id: "3",
              icon: Trophy,
              title: "Awards Won",
              value: "150+"
            },
            {
              id: "4",
              icon: BookOpen,
              title: "Years of Excellence",
              value: "25"
            }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Educators"
          description="Dedicated teachers committed to student success"
          tag="Our Faculty"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="scale-rotate"
          members={[
            {
              id: "1",
              name: "Dr. Sarah Johnson",
              role: "Principal",
              imageSrc: "https://pixabay.com/get/g380894685aabd5049f688a3028ddd019c8b695cc88c15dcd0166c676265c27b298426e42e68ea2caa321cc04305a6dbf4d863a314932e3101fe1cb0d050d5478_1280.jpg",
              imageAlt: "Dr. Sarah Johnson, Principal"
            },
            {
              id: "2",
              name: "Ms. Emily Chen",
              role: "Head of Science",
              imageSrc: "https://pixabay.com/get/g0bf424c8483041283c498ead321efc864b00fa08c5ab202bd584576159116022b83d9b7b63c8abe39dbab9ad5def7a96ed5cc8f80195b95f73b3000758ac95bd_1280.jpg",
              imageAlt: "Ms. Emily Chen, Head of Science"
            },
            {
              id: "3",
              name: "Mr. David Wilson",
              role: "Arts Director",
              imageSrc: "https://pixabay.com/get/g8581593775553f8bbb778bdbc5b4034d3e78ca2727b543a662373eda7e3631fe56aa73c9080e7081b3deeecc7b4d354b5155b8b5e6c5eba9155668aa9ed7e37d_1280.jpg",
              imageAlt: "Mr. David Wilson, Arts Director"
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Student Success Stories"
          description="Hear from our students about their educational journey"
          tag="Testimonials"
          tagIcon={MessageCircle}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="blur-reveal"
          testimonials={[
            {
              id: "1",
              name: "Emma Rodriguez",
              role: "Grade 12 Student",
              company: "Honor Roll",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g7d1a256508d0b38cae9dafd321db3b89bd5a75d50c091f2b362e1d8359b9ab3266fba26d07e73477be9ec8d19f3929466644f197568662d3ad1db8828cd6407b_1280.jpg",
              imageAlt: "Emma Rodriguez, Grade 12 Student"
            },
            {
              id: "2",
              name: "Alex Thompson",
              role: "Grade 11 Student",
              company: "Student Council",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g3ea2358ce2c004cc8dd4d4f845a7d9871ec743311bbabba933997c008264960c870fe16bb043c0e5d722df51d6d749aa5a347c9e919a93f0085770029128ce31_1280.jpg",
              imageAlt: "Alex Thompson, Grade 11 Student"
            },
            {
              id: "3",
              name: "Maya Patel",
              role: "Grade 10 Student",
              company: "STEM Club",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g0f4a87a7264f8d15a40eeb5bbdf158aa091c1f4fe4bd58277696c4521766bc50bedcaff4f461dadd9b67f42fbb853ac4fd52770888d2f917678966430f53d929_1280.jpg",
              imageAlt: "Maya Patel, Grade 10 Student"
            },
            {
              id: "4",
              name: "Jordan Lee",
              role: "Grade 12 Student",
              company: "Debate Team",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g4c4b867328731bae88eb20c73ed0299f6a9ac3a69f6ff1c0be35fa95c166d8688f84ef329a0679587e02af626296b047b4215fe02fcb2f7b2f2a6bdc555221d1_1280.jpg",
              imageAlt: "Jordan Lee, Grade 12 Student"
            }
          ]}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our school and programs"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What is the student-to-teacher ratio?",
              content: "We maintain a low student-to-teacher ratio of 15:1 to ensure personalized attention and quality education for every student."
            },
            {
              id: "2",
              title: "What extracurricular activities are available?",
              content: "We offer a wide range of activities including sports teams, music ensembles, drama club, debate team, STEM club, and community service programs."
            },
            {
              id: "3",
              title: "How do I apply for admission?",
              content: "You can start the application process by filling out our online application form, submitting required documents, and scheduling a campus tour."
            },
            {
              id: "4",
              title: "What are the school hours?",
              content: "Regular school hours are from 8:00 AM to 3:30 PM, Monday through Friday. Extended care is available from 6:30 AM to 6:00 PM."
            },
            {
              id: "5",
              title: "Are scholarships available?",
              content: "Yes, we offer merit-based scholarships and need-based financial aid. Please contact our admissions office for more information about available opportunities."
            },
            {
              id: "6",
              title: "What technology is used in classrooms?",
              content: "Our classrooms are equipped with smart boards, tablets, and high-speed internet. We also provide coding classes and digital literacy programs."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Mail}
          title="Ready to Join Excellence Academy?"
          description="Contact us today to schedule a campus tour or learn more about our admission process. We're here to help your child succeed."
          inputPlaceholder="Enter your email address"
          buttonText="Get Information"
          termsText="By signing up, you agree to receive information about Excellence Academy programs and admission updates."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Excellence Academy"
          copyrightText="© 2025 Excellence Academy. All rights reserved."
          columns={[
            {
              title: "Admissions",
              items: [
                {
                  label: "Apply Now",
                  href: "contact"
                },
                {
                  label: "Campus Tour",
                  href: "contact"
                },
                {
                  label: "Tuition & Fees",
                  href: "about"
                }
              ]
            },
            {
              title: "Academics",
              items: [
                {
                  label: "Programs",
                  href: "features"
                },
                {
                  label: "Faculty",
                  href: "team"
                },
                {
                  label: "Student Life",
                  href: "about"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Parent Portal",
                  href: "https://parent-portal.example.com"
                },
                {
                  label: "Student Portal",
                  href: "https://student-portal.example.com"
                },
                {
                  label: "Calendar",
                  href: "about"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com/excellenceacademy",
              ariaLabel: "Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/excellenceacademy",
              ariaLabel: "Twitter"
            },
            {
              icon: Instagram,
              href: "https://instagram.com/excellenceacademy",
              ariaLabel: "Instagram"
            },
            {
              icon: Youtube,
              href: "https://youtube.com/excellenceacademy",
              ariaLabel: "YouTube"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}