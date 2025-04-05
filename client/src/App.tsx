import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Record from "@/pages/Record";
import Account from "@/pages/Account";
import Team from "@/pages/Team";
import Settings from "@/pages/Settings";
import HelpCenter from "@/pages/Help";
import Sidebar from "@/components/layout/Sidebar";
import RightPanel from "@/components/layout/RightPanel";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/record" component={Record} />
      <Route path="/account" component={Account} />
      <Route path="/team" component={Team} />
      <Route path="/settings" component={Settings} />
      <Route path="/help" component={HelpCenter} />
      <Route path="/logout" component={() => {
        // In a real application, we would implement actual logout logic here
        window.location.href = '/';
        return null;
      }} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen w-full bg-white">
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
          <Router />
        </div>
        <RightPanel />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
