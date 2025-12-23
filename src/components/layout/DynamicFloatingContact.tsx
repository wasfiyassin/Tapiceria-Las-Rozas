"use client";

import dynamic from "next/dynamic";

const FloatingContactBase = dynamic(
    () => import("./FloatingContact").then((mod) => mod.FloatingContact),
    { ssr: false }
);

export function DynamicFloatingContact() {
    return <FloatingContactBase />;
}
