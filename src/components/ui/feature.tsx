import { LucideIcon } from "lucide-react";

interface FeatureProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export function Feature({ icon, title, description }: FeatureProps) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center space-y-4 h-full">
            <div className="p-3 bg-primary/10 rounded-full">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-500">{description}</p>
        </div>
    );
}
