"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", closeOnEscape)
    return () => document.removeEventListener("keydown", closeOnEscape)
  }, [])

  return (
    <div className="md:hidden">
      <Button variant="outline" size="icon" onClick={toggleMenu}>
        <Menu className="h-4 w-4" />
        <span className="sr-only">Toggle menu</span>
      </Button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div
            className={`fixed inset-y-0 left-0 w-3/4 max-w-xs bg-background shadow-lg transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b">
                <span className="font-bold text-lg">Nghia Pham</span>
                <Button variant="ghost" size="icon" onClick={toggleMenu}>
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex flex-col gap-4 p-4">
                <Link className="text-lg font-medium" href="#about" onClick={toggleMenu}>
                  About
                </Link>
                <Link className="text-lg font-medium" href="#experience" onClick={toggleMenu}>
                  Experience
                </Link>
                <Link className="text-lg font-medium" href="#skills" onClick={toggleMenu}>
                  Skills
                </Link>
                <Link className="text-lg font-medium" href="#projects" onClick={toggleMenu}>
                  Projects
                </Link>
                <Link className="text-lg font-medium" href="#contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </nav>
              <div className="mt-auto p-4 border-t">
                <ThemeToggle />
              </div>
            </div>
          </div>
          <div className="fixed inset-0" onClick={toggleMenu}></div>
        </div>
      )}
    </div>
  )
}

