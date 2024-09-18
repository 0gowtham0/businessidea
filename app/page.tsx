'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    title: "Title Slide",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-4">S-Grade</h2>
        <p className="text-xl mb-4">Connecting You to Premium Homes with the Best Brokers</p>
        <p className="text-lg italic">Presented by: Gowtham S</p>
      </>
    )
  },
  {
    title: "Problem Statement",
    content: (
      <>
        <h3 className="text-2xl font-semibold mb-4">Finding the Perfect Premium Home is Hard</h3>
        <p className="mb-4">People looking for high-end homes in Bangalore face several challenges:</p>
        <ul className="list-disc list-inside">
          <li className="mb-2">It's tough to find a service focused only on premium properties.</li>
          <li className="mb-2">Clients struggle with too many options that don't meet their needs.</li>
          <li className="mb-2">Brokers and agents can be expensive, and clients don't always feel they're getting value for what they pay.</li>
        </ul>
      </>
    )
  },
  {
    title: "Our Solution",
    content: (
      <>
        <h3 className="text-2xl font-semibold mb-4">S-Grade: Premium Real Estate Made Easy</h3>
        <ul className="list-disc list-inside">
          <li className="mb-2">We help you find luxury homes from only the best builders in Bangalore: Prestige Group, Sobha Developers, Brigade Group, Godrej Properties, and more.</li>
          <li className="mb-2">We connect you directly with brokers who already have these high-end properties.</li>
          <li className="mb-2">Our service is simple: You tell us what you're looking for, we find the best broker for you, and we charge only 10% of the broker's commission. You save money while getting top-notch service.</li>
        </ul>
      </>
    )
  },
  {
    title: "Market Opportunity",
    content: (
      <>
        <h3 className="text-2xl font-semibold mb-4">Real Estate is Booming in Bangalore</h3>
        <p className="mb-4">Bangalore is one of India's hottest real estate markets, especially for premium properties. People are ready to invest in luxury homes, and the demand is growing fast.</p>
        <p className="mb-4">Why now? The premium property market is expanding, and more high-end buyers are looking for exclusive homes. This is the perfect time to offer a service that makes the buying process easier and more valuable for these clients.</p>
      </>
    )
  },
  {
    title: "What We Offer",
    content: (
      <>
        <h3 className="text-2xl font-semibold mb-4">A Simple and Stress-Free Experience</h3>
        <p className="mb-4">We focus on high-end homes from 10 premium builders like Prestige Group, Sobha Developers, and Brigade Group.</p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-2">You tell us what kind of property you want.</li>
          <li className="mb-2">We find a broker who specializes in the kind of property you're looking for.</li>
          <li className="mb-2">We connect you with the broker, and you can proceed with finding your dream home.</li>
        </ol>
        <p>Our Fee: We take just 10% of the broker's commission, ensuring that you get the best value without extra costs.</p>
      </>
    )
  },
  {
    title: "How We Make Money",
    content: (
      <>
        <h3 className="text-2xl font-semibold mb-4">We Charge 10% of the Broker's Commission</h3>
        <p className="mb-4">Here's how it works:</p>
        <ul className="list-disc list-inside">
          <li className="mb-2">If a broker makes ₹5 lakh from a property sale, S-Grade takes ₹50,000.</li>
          <li className="mb-2">We make sure you get the service you deserve without overpaying. Our low commission ensures both the buyer and broker are happy.</li>
        </ul>
      </>
    )
  },
  {
    title: "How We'll Reach Customers",
    content: (
      <>
        <h3 className="text-2xl font-semibold mb-4">Target Customers:</h3>
        <p className="mb-4">People looking for premium homes, including wealthy buyers, investors, and businesses.</p>
        <h4 className="text-xl font-semibold mb-2">How We'll Find Them:</h4>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">Online advertising targeted at luxury property seekers.</li>
          <li className="mb-2">Partnerships with luxury lifestyle brands to reach high-end clients.</li>
          <li className="mb-2">Exclusive events and property showcases for premium clients.</li>
        </ul>
        <h4 className="text-xl font-semibold mb-2">Getting Brokers Onboard:</h4>
        <p>We'll partner with brokers who specialize in the top builders and premium properties to ensure they have what our clients are looking for.</p>
      </>
    )
  },
  {
    title: "Competitors",
    content: (
      <>
        <h3 className="text-2xl font-semibold mb-4">Other Companies in the Market:</h3>
        <p className="mb-4">MagicBricks, NoBroker, 99acres: Big real estate platforms that focus on all types of properties.</p>
        <h4 className="text-xl font-semibold mb-2">Why S-Grade is Different:</h4>
        <ul className="list-disc list-inside">
          <li className="mb-2">We only deal with luxury, premium properties.</li>
          <li className="mb-2">Our service is personal—we work closely with clients to find exactly what they're looking for.</li>
          <li className="mb-2">We charge a smaller fee (10% of the broker's commission) than many other services, offering great value.</li>
        </ul>
      </>
    )
  },
  {
    title: "Early Progress",
    content: (
      <>
        <h3 className="text-2xl font-semibold mb-4">What We've Done So Far:</h3>
        <ul className="list-disc list-inside">
          <li className="mb-2">We've started building relationships with brokers who specialize in premium properties.</li>
          <li className="mb-2">We're in discussions with some of the top builders to get exclusive listings.</li>
          <li className="mb-2">Initial feedback from potential clients has been very positive—they love the idea of a focused, value-driven service.</li>
        </ul>
      </>
    )
  },
  {
    title: "Meet the Team",
    content: (
      <>
        <h3 className="text-2xl font-semibold mb-4">Our Team:</h3>
        <ul className="list-disc list-inside">
          <li className="mb-2">Yet to be built</li>
          <li className="mb-2">required members-:Experts in real estate, client service, and marketing, ensuring S-Grade is set up for success.</li>
        </ul>
      </>
    )
  },
  {
    title: "Our Vision and Roadmap",
    content: (
      <>
        <h3 className="text-2xl font-semibold mb-4">Our Vision:</h3>
        <p className="mb-4">S-Grade aims to be the go-to service for finding luxury homes in Bangalore. We want to make buying premium properties simple, personalized, and valuable.</p>
        <h4 className="text-xl font-semibold mb-2">What's Next:</h4>
        <ul className="list-disc list-inside">
          <li className="mb-2">Year 1: Grow our network of brokers and premium builders. Secure our first 100 clients.</li>
          <li className="mb-2">Year 2: Expand to other cities like Mumbai and Hyderabad, where there's also a strong demand for luxury homes.</li>
          <li className="mb-2">Year 3: Launch a mobile app to make it even easier for clients to connect with brokers and view premium listings on the go.</li>
        </ul>
      </>
    )
  },
  {
    title: "Closing",
    content: (
      <>
        <h3 className="text-2xl font-semibold mb-4">Why S-Grade?</h3>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">We offer a premium service focused on high-end properties.</li>
          <li className="mb-2">We make finding your dream home easier by connecting you with the best brokers.</li>
          <li className="mb-2">With S-Grade, you get top-notch service at a fraction of the usual cost (just 10% of the broker's commission).</li>
        </ul>
        <p className="text-xl font-semibold">Let's Build the Future of Premium Real Estate Together.</p>
        <p className="mt-4">mail-: gowtham4freelance@gmail.com</p>
      </>
    )
  }
]

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const slideRef = useRef<HTMLDivElement>(null)

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      goToNextSlide()
    }

    if (touchStart - touchEnd < -75) {
      goToPrevSlide()
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        goToNextSlide()
      } else if (event.key === 'ArrowLeft') {
        goToPrevSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentSlide])

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.focus()
    }
  }, [currentSlide])

  return (
    <div className="min-h-screen bg-black text-gray-300 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-white">S-Grade Business Plan</h1>
      <div 
        className="w-full max-w-4xl aspect-video bg-gray-900 rounded-lg shadow-lg overflow-hidden relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={slideRef}
        tabIndex={0}
        aria-label={`Slide ${currentSlide + 1} of ${slides.length}`}
      >
        <div className="absolute inset-0 p-8 flex flex-col">
          <h2 className="text-3xl font-bold mb-4 text-white">{slides[currentSlide].title}</h2>
          <div className="flex-grow overflow-y-auto">
            {slides[currentSlide].content}
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-between w-full max-w-4xl">
        <button
          onClick={goToPrevSlide}
          disabled={currentSlide === 0}
          className="bg-gray-800 text-white px-4 py-2 rounded disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <span className="text-xl">
          Slide {currentSlide + 1} of {slides.length}
        </span>
        <button
          onClick={goToNextSlide}
          disabled={currentSlide === slides.length - 1}
          className="bg-gray-800 text-white px-4 py-2 rounded disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}