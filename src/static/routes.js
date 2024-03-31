import Blog from "../pages/blog/Blog";
import BlogInner from "../pages/blogInner/BlogInner";
import Careers from "../pages/careers/Careers";
import Careers2 from "../pages/careers2/Careers2";
import Contact from "../pages/contact/Contact";
import Policy from "../pages/policy/Policy";

export const Routers = [
  {
    id: 1,
    title: "About Us",
    path: "/blogInner",
    element: <BlogInner />,
  },
  {
    id: 2,
    title: "Careers",
    path: "/careers",
    element: <Careers />,
  },
  {
    id: 3,
    title: "Services",
    path: "/careers2",
    element: <Careers2 />,
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
    element: <Blog />,
  },
  {
    id: 5,
    title: "Contact us",
    path: "/contact",
    element: <Contact />,
  },
  {
    id: 6,
    title: "Clone project",
    path: "/policy",
    element: <Policy />,
  },
];
