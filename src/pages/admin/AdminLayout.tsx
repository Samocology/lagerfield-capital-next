
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Home, Settings, Package, Users, LineChart, PanelLeft } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const AdminLayout = () => {
  const location = useLocation();

  const getBreadcrumbPage = () => {
    switch (location.pathname) {
      case "/admin":
        return "Dashboard";
      case "/admin/team":
        return "Team";
      case "/admin/services":
        return "Services";
      case "/admin/insights":
        return "Insights";
      case "/admin/settings":
        return "Settings";
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            to="/admin"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Lagerfield Capital</span>
          </Link>
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  `flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                    isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                  }`
                }
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink
                to="/admin/team"
                className={({ isActive }) =>
                  `flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                    isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                  }`
                }
              >
                <Users className="h-5 w-5" />
                <span className="sr-only">Team</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="right">Team</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink
                to="/admin/services"
                className={({ isActive }) =>
                  `flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                    isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                  }`
                }
              >
                <Package className="h-5 w-5" />
                <span className="sr-only">Services</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="right">Services</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink
                to="/admin/insights"
                className={({ isActive }) =>
                  `flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                    isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                  }`
                }
              >
                <LineChart className="h-5 w-5" />
                <span className="sr-only">Insights</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="right">Insights</TooltipContent>
          </Tooltip>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink
                to="/admin/settings"
                className={({ isActive }) =>
                  `flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                    isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                  }`
                }
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  to="/admin"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Package className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Lagerfield Capital</span>
                </Link>
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-2.5 hover:text-foreground ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`
                  }
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </NavLink>
                <NavLink
                  to="/admin/team"
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-2.5 hover:text-foreground ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`
                  }
                >
                  <Users className="h-5 w-5" />
                  Team
                </NavLink>
                <NavLink
                  to="/admin/services"
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-2.5 hover:text-foreground ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`
                  }
                >
                  <Package className="h-5 w-5" />
                  Services
                </NavLink>
                <NavLink
                  to="/admin/insights"
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-2.5 hover:text-foreground ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`
                  }
                >
                  <LineChart className="h-5 w-5" />
                  Insights
                </NavLink>
                <NavLink
                  to="/admin/settings"
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-2.5 hover:text-foreground ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`
                  }
                >
                  <Settings className="h-5 w-5" />
                  Settings
                </NavLink>
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/admin">Admin</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{getBreadcrumbPage()}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
