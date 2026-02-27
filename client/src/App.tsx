import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

// We use hash-based routing for GitHub Pages.
// This means the URL will look like:
//   https://username.github.io/easy-way-portfolio/#/
// This avoids the 404 problem on page refresh entirely —
// GitHub Pages always serves index.html, and the hash part
// is handled by the browser/router, never sent to the server.

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" storageKey="easy-way-theme">
        <TooltipProvider>
          <Toaster />
          {/* useHashLocation makes wouter use hash routing (#/) */}
          <Router hook={useHashLocation}>
            <AppRoutes />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;