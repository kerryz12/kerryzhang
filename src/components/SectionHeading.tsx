import React from "react";

interface SectionHeadingProps {
    title: string;
    description?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
    title,
    description,
}) => {
    return (
        <header className="mb-12 grid gap-4 border-t border-gray-200 pt-8 md:mb-16 md:grid-cols-12 md:gap-10">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 md:col-span-4 md:text-4xl">
                {title}
            </h2>
            {description && (
                <p className="max-w-xl leading-relaxed text-gray-600 md:col-span-8 md:pt-1">
                    {description}
                </p>
            )}
        </header>
    );
};

export default SectionHeading;