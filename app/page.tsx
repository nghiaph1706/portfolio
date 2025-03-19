"use client"

import Link from "next/link"
import Image from "next/image"
import { Github, Mail, Linkedin, ExternalLink, Calendar, ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href")
      if (href) {
        const targetId = href.replace("#", "")
        const elem = document.getElementById(targetId)
        elem?.scrollIntoView({
          behavior: "smooth",
        })
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleScroll)
    })

    const toggleScrollTop = () => {
      setShowScrollTop(window.pageYOffset > 300)
    }

    window.addEventListener("scroll", toggleScrollTop)

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll)
      })
      window.removeEventListener("scroll", toggleScrollTop)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 md:h-20 flex items-center border-b">
        <div className="container mx-auto flex justify-between items-center">
          <Link className="flex items-center justify-center" href="#">
            <span className="font-bold text-lg md:text-xl">Nghia Pham</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
              About
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#experience">
              Experience
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#skills">
              Skills
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
              Projects
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
              Contact
            </Link>
            <ThemeToggle />
          </nav>
          <MobileMenu />
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I'm <span className="text-primary">Nghia Pham</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A software developer specializing in PHP and Java with over two years of expertise in web and
                    application development.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="#contact">Get in touch</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#projects">View my work</Link>
                  </Button>
                </div>
                <div className="flex gap-4">
                  <Link href="https://github.com/nghiaph1706" target="_blank" rel="noreferrer">
                    <Button variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/nghiaph1706" target="_blank" rel="noreferrer">
                    <Button variant="ghost" size="icon">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:nghiaph1706@gmail.com">
                    <Button variant="ghost" size="icon">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://res.cloudinary.com/dlzcd1lii/image/upload/v1740843533/portfolio/yqzz9pnyxsadmgho8utq.png"
                  width={450}
                  height={550}
                  alt="Profile Image"
                  className="rounded-lg object-cover w-full max-w-[450px]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
            </div>
            <div className="mx-auto max-w-3xl">
              <p className="text-lg text-center mb-8">
                I'm a software developer with over two years of expertise in web and application development,
                specializing in PHP and Java. I'm always eager to explore new languages and technologies, tackle fresh
                challenges, and continuously expand my skill set.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Experience</h2>
            </div>
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="relative pl-8 pb-8 border-l-2 border-primary">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold">Backend Developer</h3>
                  <p className="text-primary font-medium">VAND Co., Ltd</p>
                  <Badge className="mt-2 flex items-center gap-1 w-fit">
                    <Calendar className="h-3 w-3" />
                    <span>Oct 2024 - Present</span>
                  </Badge>
                </div>
                <p className="text-muted-foreground">
                  Analyzed and developed a multi-tenant system using the Laravel framework. Supported maintenance and
                  resolved bug fixes for both front-end and back-end functionalities.
                </p>
              </div>

              <div className="relative pl-8 pb-8 border-l-2 border-primary">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold">Software Engineer</h3>
                  <p className="text-primary font-medium">COZWork JSC</p>
                  <Badge className="mt-2 flex items-center gap-1 w-fit">
                    <Calendar className="h-3 w-3" />
                    <span>Sep 2022 - Jul 2024</span>
                  </Badge>
                </div>
                <p className="text-muted-foreground">
                  Developed web systems, focusing primarily on CRM as a Back-end Developer. Implemented features based
                  on client requirements and managed system deployments. Additionally, assisted in interviewing and
                  training interns.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technical Skills</h2>
            </div>
            <div className="mx-auto max-w-4xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <SkillCategory title="Programming Languages" skills={["Java", "PHP", "JavaScript", "HTML", "CSS"]} />
              <SkillCategory title="Databases" skills={["MySQL", "PostgreSQL", "MongoDB", "Elasticsearch"]} />
              <SkillCategory title="PHP Frameworks" skills={["Laravel", "CodeIgniter", "WordPress"]} />
              <SkillCategory title="Java Frameworks" skills={["Spring Framework"]} />
              <SkillCategory
                title="JavaScript Frameworks"
                skills={["Angular", "React.js", "Next.js", "Node.js", "Nest.js"]}
              />
              <SkillCategory title="Tools & Technologies" skills={["Git", "Docker", "Nginx", "Apache"]} />
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recent Projects</h2>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">Freelance Projects</h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ProjectCard
                    title="Dược liệu thiên nhiên Mễ Đoan"
                    description="Me Doan Natural Medicine Brand"
                    link="https://medoan.vn/"
                    imageSrc="https://res.cloudinary.com/dlzcd1lii/image/upload/v1740843857/portfolio/osc0clwgsznv2snkugof.png?height=200&width=300"
                  />
                  <ProjectCard
                    title="Zenithappfood"
                    description="Service providing solutions to increase orders for FoodApp"
                    link="https://zenithappfood.com/"
                    imageSrc="https://res.cloudinary.com/dlzcd1lii/image/upload/v1740843856/portfolio/eon9s3ehwzszfpr99hly.png?height=200&width=300"
                  />
                  <ProjectCard
                    title="Công ty TNHH Dotanaba"
                    description="Dotanaba Company Limited"
                    link="https://dotanaba.com/"
                    imageSrc="https://res.cloudinary.com/dlzcd1lii/image/upload/v1740843859/portfolio/fdnzogarja1fqekl2pxw.png?height=200&width=300"
                  />
                  <ProjectCard
                    title="FUJI Driving School"
                    description="Driving school for Vietnamese in Japan"
                    link="https://fujikantodriving.com/"
                    imageSrc="https://res.cloudinary.com/dlzcd1lii/image/upload/v1740843858/portfolio/wsu6dv3wmazrujanw1bb.png?height=200&width=300"
                  />
                  <ProjectCard
                    title="One House"
                    description="Real estate buying, selling & renting listing page"
                    link="https://onehouse.com.vn/"
                    imageSrc="https://res.cloudinary.com/dlzcd1lii/image/upload/v1740843857/portfolio/cu0hmvs2dfqp4qboge1n.png?height=200&width=300"
                  />
                  <ProjectCard
                    title="Bồn Nước Inox, Bể Ngầm Inox Sơn Hà"
                    description="Brand of Stainless Steel Water Tank, Stainless Steel Underground Tank Son Ha"
                    link="https://boninox.com.vn/"
                    imageSrc="https://res.cloudinary.com/dlzcd1lii/image/upload/v1740843856/portfolio/iu8eqpzl1psvs49zx3rs.png?height=200&width=300"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">Personal Projects</h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  <ProjectCard
                    title="Tortue Webtools"
                    description="Useful Tools & Utilities"
                    link="https://webtools.tortue.in/"
                    imageSrc="https://res.cloudinary.com/dlzcd1lii/image/upload/v1740844441/portfolio/lv0zixw2b8f2oziurq8y.png?height=200&width=300"
                  />
                  <ProjectCard
                    title="Tortue"
                    description="Tortue brand website solutions"
                    link="https://tortue.in/"
                    imageSrc="https://res.cloudinary.com/dlzcd1lii/image/upload/v1740844444/portfolio/fkwbw0xystu8iq90hmma.png?height=200&width=300"
                  />
                  <ProjectCard
                    title="PhimMoiDay"
                    description="Watch movies online"
                    link="https://phimmoiday.xyz/"
                    imageSrc="https://res.cloudinary.com/dlzcd1lii/image/upload/v1740844447/portfolio/dm17rs5fnw5lndgbg02d.png?height=200&width=300"
                  />
                  <ProjectCard
                    title="Chill TV"
                    description="Watch movies online"
                    link="https://chilltv.top/"
                    imageSrc="https://res.cloudinary.com/dlzcd1lii/image/upload/v1740844444/portfolio/ywt3k0utegrbtliqdn3v.png?height=200&width=300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Reach me at{" "}
                  <a href="mailto:nghiaph1706@gmail.com" className="text-primary hover:underline">
                    nghiaph1706@gmail.com
                  </a>{" "}
                  or on LinkedIn at{" "}
                  <a
                    href="https://linkedin.com/in/nghiaph1706"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline"
                  >
                    linkedin.com/in/nghiaph1706
                  </a>
                  . Let's connect and learn together!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2 mt-6">
                <div className="flex justify-center space-x-4">
                  <Link href="mailto:nghiaph1706@gmail.com">
                    <Button className="w-full">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Me
                    </Button>
                  </Link>
                </div>
                <p className="text-xs text-muted-foreground mt-4">Or connect with me on social media:</p>
                <div className="flex justify-center space-x-4">
                  <Link href="https://github.com/nghiaph1706" target="_blank" rel="noreferrer">
                    <Button variant="outline" size="icon">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/nghiaph1706" target="_blank" rel="noreferrer">
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mt-8 text-center">
                <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4 max-w-2xl mx-auto">
                  Thanks for stopping by my corner of the internet! 💫
                  <br />
                  <span className="text-sm">Last edited on Sep 24, 2024</span>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 Nghia Pham. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6 flex-wrap justify-center">
          <Link className="text-xs hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#experience">
            Experience
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#skills">
            Skills
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#projects">
            Projects
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </footer>
      {showScrollTop && (
        <Button
          className="fixed bottom-[calc(1rem+2.5rem)] right-4 rounded-full p-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-in-out shadow-lg z-10"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}

function ProjectCard({
  title,
  description,
  link,
  imageSrc,
}: {
  title: string
  description?: string
  link: string
  imageSrc: string
}) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="aspect-video relative">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="space-y-2 flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-bold">{title}</h3>
          </div>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
        <div className="mt-4 pt-4 border-t flex justify-end">
          <Link href={link} target="_blank" rel="noreferrer">
            <Button variant="outline" size="sm" className="gap-1">
              <ExternalLink className="h-3.5 w-3.5" />
              Visit Site
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}

