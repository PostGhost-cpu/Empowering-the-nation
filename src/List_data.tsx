export interface Six_months {
    title: string
    description: string
}

export interface Six_weeks {
    title: string
    description: string
}

export interface Months_courses {
    title: string
    description: string
}

export interface Weeks_courses {
    title: string
    description: string
}

export const monthsArray:Six_months[] = [
    {
        title: "Ideal for",
        description: "Learners who want an in-depth, comprehensive understanding of their chosen subject."
    },
    {
        title: "Structure",
        description: "Covers all core topics with additional time for practical projects, assessments, and mentorship sessions."
    },
    {
        title: "Outcome",
        description: "A strong, well-rounded skill set and a professional-level portfolio."
    },
];

export const weeksArray:Six_weeks[] = [
    {
        title: "Ideal for",
        description: "Learners seeking a fast-track learning experience.",
    },
    {
        title: "Structure",
        description: "Focused and intensive lessons, aimed at delivering essential knowledge and skills in the shortest possible time.",
    },
    {
        title: "Outcome",
        description: "Solid foundational skills and the ability to apply them in real-world scenarios.",
    },
]

export const monthsCourses:Months_courses[] = [
    {
        title: "First Aid",
        description: "Learn how to respond to medical emergencies with confidence. This course covers basic life support, CPR, treating wounds, burns, fractures, and managing emergency scenes—perfect for caregivers and home workers.",
    },
    {
        title: "Sewing",
        description: "Master essential sewing techniques from machine setup to garment design. Learn to sew buttons, hems, zips, and perform clothing alterations — great for starting a small tailoring business or enhancing job skills.",
    },
    {
        title: "Landscaping",
        description: "Gain practical knowledge to design and care for beautiful gardens. This course covers indigenous and exotic plants, garden layout, built-in features like fountains, and balancing garden aesthetics.",
    },
    {
        title: "Life Skills",
        description: "Learn the basics of daily adult life — including opening a bank account, understanding your labour rights, and improving your reading, writing, and number skills for work and independence.",
    },
]

export const weeksCourses:Weeks_courses[] = [
    {
        title: "Child Minding",
        description: "Get trained in caring for babies and toddlers, from newborn to age three. Learn about feeding, hygiene, routines, and educational toys — ideal for aspiring nannies or parents.",
    },
    {
        title: "Cooking",
        description: "Prepare tasty, nutritious meals on a budget. This course covers balanced diets, meal planning, cooking techniques, and recipes to feed a family healthily every day.",
    },
    {
        title: "Garden Maintenance",
        description: "Understand how to care for home gardens with practical skills in watering, pruning, and planting. Learn about plant types, watering rules, and how to grow thriving outdoor spaces.",
    },
]