import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRight, Github, Linkedin, Mail, Phone, ChevronDown, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const experienceAnim = useScrollAnimation();
  const projectsAnim = useScrollAnimation();
  const skillsAnim = useScrollAnimation();
  const leadershipAnim = useScrollAnimation();
  const contactAnim = useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl">Ashwin Rai</div>
            
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("experience")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-experience"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-projects"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-skills"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-contact"
              >
                Contact
              </button>
              <a
                href="/attached_assets/ASHWIN_RAI_RESUME_1764173357171.pdf"
                download
                data-testid="button-download-resume"
              >
                <Button variant="outline" size="sm">
                  Download Resume
                </Button>
              </a>
            </nav>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <nav className="flex flex-col gap-6 mt-8">
                  <button
                    onClick={() => scrollToSection("experience")}
                    className="text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="mobile-link-experience"
                  >
                    Experience
                  </button>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="mobile-link-projects"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => scrollToSection("skills")}
                    className="text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="mobile-link-skills"
                  >
                    Skills
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="mobile-link-contact"
                  >
                    Contact
                  </button>
                  <a
                    href="/attached_assets/ASHWIN_RAI_RESUME_1764173357171.pdf"
                    download
                    className="w-full"
                    data-testid="mobile-button-download-resume"
                  >
                    <Button variant="outline" className="w-full">
                      Download Resume
                    </Button>
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(74,158,255,0.08),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight" data-testid="text-hero-title">
                  Backend Engineer &<br />
                  Full-Stack Developer
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground font-mono" data-testid="text-hero-metrics">
                  800+ commits • 99.99% uptime • 8,000+ users impacted
                </p>
              </div>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed" data-testid="text-hero-description">
                Crafting scalable backend systems and leading technical teams at IIIT Bhagalpur.
                Specialized in Django, Node.js, and cloud infrastructure with a track record of
                reducing latency, automating workflows, and building products used by thousands.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="gap-2"
                  data-testid="button-view-projects"
                >
                  View Projects <ArrowRight className="w-4 h-4" />
                </Button>
                <a href="mailto:ashwin.2201098cs@iiitbh.ac.in" data-testid="button-contact-me">
                  <Button size="lg" variant="outline">
                    Contact Me
                  </Button>
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 flex items-center justify-center backdrop-blur-sm border border-primary/10">
                  <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                    <div className="text-center space-y-2 p-8">
                      <div className="text-6xl sm:text-7xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                        AR
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        Building at scale
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/10 blur-2xl animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-accent/10 blur-2xl animate-pulse delay-700" />
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => scrollToSection("experience")}
              className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
              data-testid="button-scroll-down"
            >
              <span className="text-sm">Scroll to explore</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section
        id="experience"
        ref={experienceAnim.ref}
        className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          experienceAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-experience-title">
              Professional Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building impactful solutions and driving technical excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 hover-elevate transition-all duration-300" data-testid="card-experience-weecom">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-2xl font-semibold">Weecom</h3>
                    <p className="text-lg text-muted-foreground">Backend Developer Intern</p>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    June 2025 – Sep 2025
                  </Badge>
                </div>
                <ul className="space-y-3 text-base leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>
                      Collaborated on an internal tool with <strong>Django REST Framework</strong>, automating
                      invoice, onboarding and reporting workflows to reduce manual effort by{" "}
                      <strong className="text-foreground">40%</strong> across company operations
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>
                      Integrated <strong>Celery</strong> for resilient background processing (PDF generation,
                      email/SMS notifications, retry logic), handling{" "}
                      <strong className="text-foreground">300+ daily tasks</strong> and improving throughput
                      under peak load
                    </span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 hover-elevate transition-all duration-300" data-testid="card-experience-jorte">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-2xl font-semibold">Jorte</h3>
                    <p className="text-lg text-muted-foreground">SDE Intern</p>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    March 2025 – July 2025
                  </Badge>
                </div>
                <ul className="space-y-3 text-base leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>
                      Reduced API latency by <strong className="text-foreground">17%</strong> through{" "}
                      <strong>Redis caching</strong>, query refactors and paginated endpoints for user-facing
                      search and data-heavy routes during load tests
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>
                      Launched a career-counseling service used by{" "}
                      <strong className="text-foreground">8,000+ students</strong>, adding scheduled mailers,
                      activity tracking and A/B experiments to boost engagement and response rates
                    </span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="projects"
        ref={projectsAnim.ref}
        className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30 transition-all duration-1000 ${
          projectsAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-projects-title">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building scalable solutions from cloud IDEs to real-time multiplayer platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover-elevate transition-all duration-300 flex flex-col overflow-hidden relative group" data-testid="card-project-devzen">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="space-y-4 flex-1 relative">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">DevZEN</h3>
                  <p className="text-sm text-muted-foreground">March 2025 – August 2025</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Monaco</Badge>
                  <Badge variant="secondary">CRDT</Badge>
                  <Badge variant="secondary">WebSockets</Badge>
                  <Badge variant="secondary">S3</Badge>
                  <Badge variant="secondary">Kubernetes</Badge>
                </div>

                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Built a cloud collaborative IDE enabling concurrent editing across{" "}
                    <strong className="text-foreground">50+ active projects</strong> with low-latency sync
                  </p>
                  <p>
                    Designed Kubernetes deployment with isolated pods, autoscaling workers achieving{" "}
                    <strong className="text-foreground">1.2s cold-starts</strong> and{" "}
                    <strong className="text-foreground">30% lower infra cost</strong>
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-6 relative">
                <a
                  href="https://github.com/ashwinrai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  data-testid="link-devzen-github"
                >
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Github className="w-4 h-4" /> GitHub
                  </Button>
                </a>
              </div>
            </Card>

            <Card className="p-8 hover-elevate transition-all duration-300 flex flex-col overflow-hidden relative group" data-testid="card-project-chess">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="space-y-4 flex-1 relative">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Chess-Royale</h3>
                  <p className="text-sm text-muted-foreground">December 2024 – January 2025</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Turborepo</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">WebSockets</Badge>
                </div>

                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Created a real-time multiplayer chess platform with WebSockets supporting{" "}
                    <strong className="text-foreground">300+ participants</strong> and{" "}
                    <strong className="text-foreground">1,000+ matches</strong>
                  </p>
                  <p>
                    Deployed via CI/CD and Nginx on AWS EC2 maintaining{" "}
                    <strong className="text-foreground">99.99% uptime</strong> and supporting{" "}
                    <strong className="text-foreground">500+ concurrent users</strong>
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-6 relative">
                <a
                  href="https://github.com/ashwinrai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  data-testid="link-chess-github"
                >
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Github className="w-4 h-4" /> GitHub
                  </Button>
                </a>
              </div>
            </Card>

            <Card className="p-8 hover-elevate transition-all duration-300 flex flex-col overflow-hidden relative group" data-testid="card-project-uniblogic">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="space-y-4 flex-1 relative">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">UniBLOGic</h3>
                  <p className="text-sm text-muted-foreground">July 2024 – November 2024</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React.js</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Docker</Badge>
                </div>

                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Developed a college community platform with real-time chat adopted by{" "}
                    <strong className="text-foreground">500+ active users</strong> across campus
                    organizations
                  </p>
                  <p>
                    Implemented a microservice video pipeline cutting costs by{" "}
                    <strong className="text-foreground">30%</strong> and improving delivery speed by{" "}
                    <strong className="text-foreground">25%</strong> for 250+ videos
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-6 relative">
                <a
                  href="https://github.com/ashwinrai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  data-testid="link-uniblogic-github"
                >
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Github className="w-4 h-4" /> GitHub
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="skills"
        ref={skillsAnim.ref}
        className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          skillsAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-skills-title">
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Full-stack expertise across modern web technologies and cloud infrastructure
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "C++",
                  "Python",
                  "JavaScript",
                  "TypeScript",
                  "CSS",
                  "HTML",
                  "SQL",
                  "YAML",
                  "GoLang",
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm" data-testid={`skill-${skill.toLowerCase()}`}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-3">
                {["Git", "GitHub", "AWS", "Cloudflare"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm" data-testid={`tool-${skill.toLowerCase()}`}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Technologies & Frameworks</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "React.js",
                  "Django REST Framework",
                  "Tailwind",
                  "Node.js",
                  "Hono",
                  "Turborepo",
                  "Next.js",
                  "Docker",
                  "Kubernetes",
                  "WebSockets",
                  "Express",
                  "WebRTC",
                  "Redis",
                  "FFmpeg",
                  "MongoDB",
                  "Postgres",
                  "MySQL",
                  "Prisma",
                  "gRPC",
                  "GraphQL",
                  "MCP",
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm" data-testid={`tech-${skill.toLowerCase().replace(/\./g, '-')}`}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={leadershipAnim.ref}
        className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30 transition-all duration-1000 ${
          leadershipAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-leadership-title">
              Leadership & Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Driving technical excellence and mentoring the next generation of developers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8" data-testid="card-achievements">
              <h3 className="text-2xl font-semibold mb-6">Achievements</h3>
              <ul className="space-y-4 text-base leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>
                    Earned selection to the <strong className="text-foreground">SSB</strong>, demonstrating
                    exceptional analytical capabilities and decision-making proficiency
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>
                    Achieved <strong className="text-foreground">800+ commits</strong> in under a year,
                    reflecting consistent dedication to software development excellence
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="p-8" data-testid="card-education">
              <h3 className="text-2xl font-semibold mb-6">Education</h3>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold">
                  Indian Institute of Information Technology Bhagalpur
                </h4>
                <p className="text-muted-foreground">Bachelor of Technology in Computer Science Engineering</p>
                <p className="text-sm text-muted-foreground">November 2022 – July 2026</p>
                <p className="text-sm">
                  CGPA: <strong className="text-foreground">7.16</strong>
                </p>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 relative overflow-hidden" data-testid="card-role-cp-lead">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              <div className="space-y-4 pl-4">
                <div className="relative">
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-primary border-4 border-background" />
                  <h3 className="text-xl font-semibold">CP/DSA Lead</h3>
                  <p className="text-muted-foreground">GFG IIIT-BH Student's Chapter</p>
                  <p className="text-sm text-muted-foreground">April 2024 – April 2025</p>
                </div>
                <ul className="space-y-3 text-sm leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>
                      Directed mentorship program for <strong className="text-foreground">100+ students</strong>{" "}
                      with focused coding exercises and challenges
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>
                      Curated <strong className="text-foreground">20+ coding problems</strong> and editorials,
                      increasing engagement by <strong className="text-foreground">20%</strong> and reducing
                      queries by <strong className="text-foreground">25%</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 relative overflow-hidden" data-testid="card-role-club-lead">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              <div className="space-y-4 pl-4">
                <div className="relative">
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-primary border-4 border-background" />
                  <h3 className="text-xl font-semibold">Club Lead</h3>
                  <p className="text-muted-foreground">DevC IIIT Bhagalpur</p>
                  <p className="text-sm text-muted-foreground">January 2024 – January 2025</p>
                </div>
                <ul className="space-y-3 text-sm leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>
                      Pioneered college community platform development, integrating CI and CD pipelines that
                      reduced deployment times by <strong className="text-foreground">40%</strong>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>
                      Organized <strong className="text-foreground">8 tech workshops</strong> on modern tools
                      with <strong className="text-foreground">300+ cumulative participants</strong>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>
                      Modernized college systems by introducing test automation, decreasing bug reports by{" "}
                      <strong className="text-foreground">35%</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="contact"
        ref={contactAnim.ref}
        className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          contactAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-contact-title">
            Let's Build Something Great Together
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of
            your visions. Feel free to reach out!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:ashwin.2201098cs@iiitbh.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-email"
            >
              <Button size="lg" className="gap-2">
                <Mail className="w-5 h-5" />
                Email Me
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/ashwinrai"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-linkedin"
            >
              <Button size="lg" variant="outline" className="gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Button>
            </a>
            <a
              href="https://github.com/ashwinrai"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-github"
            >
              <Button size="lg" variant="outline" className="gap-2">
                <Github className="w-5 h-5" />
                GitHub
              </Button>
            </a>
            <a href="tel:+919636834457" data-testid="link-phone">
              <Button size="lg" variant="outline" className="gap-2">
                <Phone className="w-5 h-5" />
                Call Me
              </Button>
            </a>
          </div>

          <div className="mt-16 pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              © 2025 Ashwin Rai. Built with React, TypeScript & Tailwind CSS.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
