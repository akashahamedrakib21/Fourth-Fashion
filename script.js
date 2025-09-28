// GSAP এবং ScrollTrigger লাইব্রেরি রেডি করুন
gsap.registerPlugin(ScrollTrigger);

// Hero Section এর Scroll-Reversible Animation
const heroTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#hero",
        start: "top top",      
        end: "bottom top",    
        scrub: true,           // স্ক্রলের সাথে মসৃণভাবে লিংক করবে
        pin: true,             // Hero সেকশনকে স্ক্রিন-এ আটকে রাখবে
    }
});

// ইনিশিয়াল অ্যানিমেশন (স্ক্রিনে প্রবেশ)
// 0 সেকেন্ডে শুরু হবে (টাইমলাইনের শুরুতে)
heroTimeline.from("#left-element", { 
    x: "-100vw", // বাম দিক থেকে আসা
    opacity: 0,
    duration: 1,
    ease: "power2.out"
}, 0) 
.from("#right-element", { 
    x: "100vw", // ডান দিক থেকে আসা
    opacity: 0,
    duration: 1,
    ease: "power2.out"
}, 0)

// স্ক্রল ডাউন করার পর বের হয়ে যাওয়া
// 1 সেকেন্ডে শুরু হবে (প্রথম অ্যানিমেশনের পর)
.to("#left-element", { 
    x: "-100vw", // বাম দিকে বের হয়ে যাওয়া
    opacity: 0,
    duration: 1,
    ease: "power2.in"
}, 1) 
.to("#right-element", { 
    x: "100vw", // ডান দিকে বের হয়ে যাওয়া
    opacity: 0,
    duration: 1,
    ease: "power2.in"
}, 1);

// মাউস-ফলো এফেক্ট (Parallax-এর জন্য একটি লোগো বাটন-এ হালকা নড়াচড়া)

gsap.to(".product-section h2", {
    y: 100, // প্রোডাক্ট সেকশনের টাইটেলটি স্ক্রলের সাথে সামান্য নড়বে
    ease: "none",
    scrollTrigger: {
        trigger: ".product-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});