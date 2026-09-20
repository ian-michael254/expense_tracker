export interface navLink {
    id:string,
    path:string,
    title:string
};

export const navLinks:navLink[] = [
    {
        id:"dashboard",
        title:"Dashboard",
        path:"/dashboard"
    },
    {
        id:"budget",
        title:"Budget",
        path:"/budget"
    },
    {
        id:"expenses",
        title:"Expenses",
        path:"/expenses"
    },
    {
        id:"reports",
        title:"Reports",
        path:"/reports"
    }
];