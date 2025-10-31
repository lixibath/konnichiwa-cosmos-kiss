import { Home, Users, Briefcase, DollarSign, MapPin, HelpCircle, Mail, Image, MessageSquare, Shield, FileText } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "/logo.png";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "About Us", url: "/about", icon: Users },
  { title: "Services", url: "/services", icon: Briefcase },
  { title: "Residential", url: "/residential", icon: Home },
  { title: "Commercial", url: "/commercial", icon: Briefcase },
  { title: "Pricing", url: "/pricing", icon: DollarSign },
  { title: "Service Area", url: "/service-area", icon: MapPin },
  { title: "Why Us", url: "/why-us", icon: HelpCircle },
  { title: "FAQ", url: "/faq", icon: HelpCircle },
  { title: "Contact", url: "/contact", icon: Mail },
  { title: "Gallery", url: "/gallery", icon: Image },
  { title: "Testimonials", url: "/testimonials", icon: MessageSquare },
  { title: "Privacy Policy", url: "/privacy", icon: Shield },
  { title: "Terms of Service", url: "/terms", icon: FileText },
];

export function AppSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar className="border-r border-border/50 bg-sidebar">
      <SidebarHeader className="border-b border-border/50 p-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="MJ Davison Cleaning" className="h-10 w-10" />
          {open && (
            <div className="flex flex-col">
              <span className="text-sm font-heading font-bold text-sidebar-foreground">MJ DAVISON</span>
              <span className="text-xs text-muted-foreground">CLEANING LLC</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground px-4 mb-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                  >
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/"}
                      className={({ isActive }) => 
                        `flex items-center gap-3 px-4 py-2 transition-colors ${
                          isActive 
                            ? "bg-accent text-accent-foreground font-medium" 
                            : "hover:bg-accent/50 hover:text-accent-foreground"
                        }`
                      }
                    >
                      <item.icon className="h-4 w-4 text-primary" />
                      {open && <span className="text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-6">
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground px-4 mb-2">
            Contact
          </SidebarGroupLabel>
          <SidebarGroupContent className="px-4">
            {open && (
              <div className="space-y-2 text-xs text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Mail className="h-3 w-3 text-primary" />
                  <a href="mailto:contact@cleaningmj.com" className="hover:text-primary transition-colors">
                    contact@cleaningmj.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="h-3 w-3 text-primary">📞</span>
                  <a href="tel:9294624627" className="hover:text-primary transition-colors">
                    (929) 462-4627
                  </a>
                </p>
              </div>
            )}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
