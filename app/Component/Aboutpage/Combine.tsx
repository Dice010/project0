import { ReactNode } from "react";

type prob = {
    children: ReactNode
    className?: string
}

export default function Comnine ({children, className} : prob) {
    return (
        <section className={className + " flex flex-col justify-center items-center bg-white"}>
            {children}
        </section>
    );
}