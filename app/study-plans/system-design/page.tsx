import { Metadata } from "next";
import SystemDesignPlanClient from "./SystemDesignPlanClient";

export const metadata: Metadata = {
  title: "45-Day System Design Master Plan — Code Chronicles",
  description: "Interactive 45-day system design study plan covering SOLID, OOD, HLD fundamentals, and interview problems with progress tracking",
};

export default function SystemDesignPlanPage() {
  return <SystemDesignPlanClient />;
}
