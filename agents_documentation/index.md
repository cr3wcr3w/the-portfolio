# AGENTS.md

# Frontend Development Guidelines

## 1. Project Overview

This project follows a **Feature-Based Architecture** designed to keep the frontend modular, scalable, maintainable, and easy to navigate.

The application uses the following technologies:

| Technology | Purpose |
|---|---|
| Astro | Frontend framework and routing |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Motion | Animations and transitions |
| Nano Stores | Lightweight global state management |
| Three.js | 3D graphics and interactive experiences |

### Core Principles

- Follow feature-based organization rather than purely technical-layer organization.
- Keep components small, reusable, and maintainable.
- Separate business logic from presentation.
- Prefer composition over unnecessarily complex components.
- Avoid unnecessary dependencies and abstractions.
- Prioritize performance, accessibility, and responsive design.
- Keep code readable and predictable.
- Maintain a consistent newspaper-inspired editorial design.

---

## 2. Project Structure

Follow this directory structure when creating or organizing frontend code.

```text
src/
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── components/
│   └── ui/
│       ├── Button.astro
│       ├── Input.astro
│       └── Modal.astro
│
├── content/
│   └── blogs/
│       ├── first-post.md
│       └── second-post.md
│
├── features/
│   ├── authentication/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── stores/
│   │   ├── types/
│   │   └── index.ts
│   │
│   ├── dashboard/
│   │   ├── components/
│   │   ├── services/
│   │   ├── stores/
│   │   ├── types/
│   │   └── index.ts
│   │
│   └── portfolio/
│       ├── components/
│       ├── animations/
│       ├── three/
│       └── index.ts
│
├── layouts/
│   ├── MainLayout.astro
│   └── BlogLayout.astro
│
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── contact.astro
│   └── blog/
│       ├── index.astro
│       └── [...slug].astro
│
├── routes/
│   ├── home/
│   │   ├── components/
│   │   └── index.ts
│   │
│   ├── about/
│   │   ├── components/
│   │   └── index.ts
│   │
│   └── contact/
│       ├── components/
│       └── index.ts
│
├── blogs/
│   ├── components/
│   ├── services/
│   ├── types/
│   └── index.ts
│
├── shared/
│   ├── animations/
│   ├── constants/
│   ├── hooks/
│   ├── lib/
│   ├── stores/
│   ├── types/
│   └── utils/
│
├── styles/
│   ├── global.css
│   ├── animations.css
│   └── variables.css
│
└── env.d.ts
```

### Directory Responsibilities

#### `features/`

Contains self-contained application features.

Each feature owns its:

- Components
- Business logic
- State management
- Services
- Types
- Feature-specific animations

Features should not depend on the internal implementation of other features.

#### `routes/`

Contains route-specific components and supporting logic.

Responsibilities:

- Page-specific sections
- Route-specific data preparation
- Page composition
- Route-level components

Actual Astro route entry points must remain inside `src/pages/`.

#### `shared/`

Contains code that is genuinely reusable across multiple features.

Examples:

- Shared utilities
- Global stores
- Common hooks
- Constants
- Animation utilities
- Shared TypeScript types

Do not place feature-specific logic here.

#### `blogs/`

Contains blog-related application functionality.

Examples:

- Blog components
- Blog utilities
- Blog data processing
- Blog-specific types

Actual Markdown or MDX content should live in `src/content/blogs/` and use Astro Content Collections.

#### `components/ui/`

Contains generic, reusable interface components.

Examples:

- Buttons
- Inputs
- Dialogs
- Cards
- Dropdowns

UI components must not contain application-specific business logic.

---

## 3. Feature-Based Architecture Rules

Every feature should be independently understandable and organized.

Example:

```text
features/
└── authentication/
    ├── components/
    │   ├── LoginForm.astro
    │   └── RegisterForm.astro
    │
    ├── services/
    │   └── auth.service.ts
    │
    ├── stores/
    │   └── auth.store.ts
    │
    ├── types/
    │   └── auth.types.ts
    │
    └── index.ts
```

### Rules

1. Keep feature-specific code inside its feature directory.
2. Do not create global abstractions for functionality used by only one feature.
3. Export public feature functionality through `index.ts` when useful.
4. Avoid importing another feature's internal files directly.
5. Extract shared functionality only when multiple parts of the application genuinely need it.
6. Avoid circular dependencies.
7. Keep each feature responsible for its own state and business logic.
8. Prefer clear module boundaries over excessive abstraction.

---

## 4. Astro Development Guidelines

Astro is the primary frontend framework.

### Component Guidelines

- Use `.astro` components by default.
- Prefer server-rendered HTML.
- Use framework components or client-side JavaScript only when interactivity is required.
- Avoid turning static pages into unnecessary client-side applications.
- Keep layouts separate from individual page implementations.
- Prefer semantic HTML elements.
- Keep components focused on a single responsibility.

### Client Directives

Use Astro client directives intentionally.

| Directive | Usage |
|---|---|
| `client:load` | Immediately interactive components |
| `client:idle` | Components that can wait until the browser is idle |
| `client:visible` | Components that should load when visible |
| `client:media` | Components requiring a specific media query |

Do not hydrate components unnecessarily.

### Routing

- Astro routes must be defined inside `src/pages/`.
- Use file-based routing.
- Use dynamic routes for content-driven pages.
- Keep route-specific components inside `src/routes/`.
- Keep page files focused on assembling the required layouts and components.

---

## 5. Tailwind CSS Guidelines

Use **Tailwind CSS** as the primary styling solution throughout the project.

### Core Principles

- Use utility-first styling.
- Prefer Tailwind utility classes over writing custom CSS.
- Keep styling consistent with the project's design system.
- Avoid unnecessary CSS abstractions.
- Prioritize responsive and accessible interfaces.
- Use reusable components for repeated UI patterns.

### Tailwind Usage

1. Use Tailwind utility classes directly in Astro and supported framework components.
2. Use responsive variants such as `sm:`, `md:`, `lg:`, and `xl:`.
3. Use state variants such as `hover:`, `focus:`, `active:`, and `disabled:`.
4. Use Tailwind's dark mode utilities when dark mode is required.
5. Prefer existing design tokens over arbitrary values.
6. Avoid excessively long class strings when component composition would improve readability.
7. Extract repeated UI patterns into reusable components.
8. Avoid using inline styles unless values must be calculated dynamically.

### Custom CSS

Custom CSS is allowed when Tailwind utilities are insufficient.

Use custom CSS for:

- Complex animations.
- Advanced selectors.
- Custom keyframes.
- Three.js canvas styling.
- Complex visual effects.
- Styles that are impractical to express with utilities.

Keep custom styles organized inside:

```text
src/
└── styles/
    ├── global.css
    ├── animations.css
    └── variables.css
```

### Design Tokens

Centralize reusable design values using Tailwind theme configuration or CSS variables.

Examples:

- Brand colors
- Background colors
- Typography
- Spacing
- Border radius
- Shadows
- Breakpoints

Avoid repeatedly introducing arbitrary values when a reusable design token is more appropriate.

### Component Styling

- Keep component-specific styling close to the component.
- Use consistent spacing and typography.
- Avoid duplicating long utility class combinations.
- Do not introduce additional CSS frameworks without approval.
- Do not use inline styles as a replacement for Tailwind.
- Ensure components remain responsive across mobile, tablet, and desktop.

### Styling Priority

Follow this order when implementing styles:

1. Tailwind utility classes.
2. Reusable component classes using Tailwind's supported composition features.
3. Custom CSS for cases Tailwind cannot reasonably handle.

**Final Rule:** Tailwind CSS is the default styling solution. Custom CSS should complement Tailwind, not replace it.

---

## 6. Motion Guidelines

Use Motion for animations and transitions.

### Appropriate Use Cases

- Page transitions
- Entrance animations
- Scroll-triggered animations
- Hover interactions
- Interactive UI elements
- Micro-interactions

### Rules

1. Keep animations purposeful and subtle.
2. Avoid animating every element.
3. Prefer transform and opacity animations for performance.
4. Avoid unnecessary layout-triggering animations.
5. Respect `prefers-reduced-motion`.
6. Avoid duplicating animation logic across components.
7. Keep reusable animation configurations inside `shared/animations/`.
8. Prefer Motion's vanilla JavaScript API for Astro components.
9. Use framework-specific Motion APIs only when the corresponding framework integration is intentionally part of the project.

---

## 7. Nano Stores Guidelines

Use Nano Stores for lightweight shared state management.

### When to Use

Use Nano Stores when:

- State is shared between multiple components.
- Components need to synchronize UI state.
- State must persist across navigation when appropriate.
- Prop drilling becomes unnecessarily complicated.

### When Not to Use

Avoid Nano Stores for:

- Simple component-local state.
- Static values.
- Data that can be derived directly from existing state.
- Temporary interactions that belong inside a single component.

### Organization

```text
features/
└── dashboard/
    └── stores/
        ├── dashboard.store.ts
        └── filters.store.ts

shared/
└── stores/
    ├── theme.store.ts
    └── navigation.store.ts
```

### Rules

1. Keep feature state inside its respective feature.
2. Keep genuinely global state inside `shared/stores/`.
3. Use descriptive store names.
4. Avoid duplicating state.
5. Derive values instead of storing redundant data.
6. Keep state updates predictable.
7. Avoid introducing global state without a clear requirement.

---

## 8. Three.js Guidelines

Use Three.js for advanced 3D experiences and interactive visualizations.

### Appropriate Use Cases

- 3D models
- Interactive backgrounds
- Particle systems
- 3D product showcases
- Interactive scenes
- WebGL-based visual effects

### Organization

```text
features/
└── portfolio/
    └── three/
        ├── scenes/
        ├── objects/
        ├── materials/
        ├── geometries/
        └── utils/
```

### Rules

1. Keep Three.js logic isolated from ordinary UI components.
2. Load Three.js only on the client.
3. Avoid initializing WebGL scenes during server-side rendering.
4. Dispose of geometries, materials, textures, and renderers when no longer needed.
5. Clean up event listeners and animation loops.
6. Handle WebGL initialization failures gracefully.
7. Avoid unnecessary render loops.
8. Optimize models, textures, and draw calls.
9. Provide fallbacks for devices that cannot support the experience.
10. Respect reduced-motion preferences where applicable.

Three.js must enhance the experience without compromising the usability of the rest of the application.

---

## 9. TypeScript Guidelines

Use TypeScript throughout the project.

### Rules

- Avoid `any` whenever possible.
- Prefer explicit types for public interfaces.
- Use `interface` or `type` consistently.
- Keep feature-specific types inside their feature.
- Use shared types only when genuinely shared.
- Avoid unnecessary type assertions.
- Keep function parameters and return values understandable.
- Use strict TypeScript settings.

### Naming Conventions

| Element | Convention | Example |
|---|---|---|
| Components | PascalCase | `LoginForm.astro` |
| Functions | camelCase | `getUserProfile` |
| Variables | camelCase | `isAuthenticated` |
| Types | PascalCase | `UserProfile` |
| Constants | UPPER_SNAKE_CASE | `API_BASE_URL` |
| Stores | camelCase | `auth.store.ts` |
| Services | camelCase | `auth.service.ts` |

---

## 10. Design Direction — Modern Editorial Newspaper

The overall visual identity of this project must follow a **newspaper-inspired editorial design**.

The interface should feel like a modern digital newspaper, combining traditional print aesthetics with contemporary web design.

### Visual Identity

- Newspaper-inspired layouts.
- Editorial and magazine-style compositions.
- Strong typography hierarchy.
- Large, expressive headlines.
- Multi-column content layouts.
- Thin borders and dividing lines.
- Minimal decorative elements.
- Generous whitespace.
- Structured content sections.
- High-quality editorial imagery.

### Color Palette

Use a restrained, newspaper-inspired color palette.

Preferred colors:

- Off-white or warm paper backgrounds.
- Black and charcoal typography.
- Muted gray secondary text.
- Subtle gray borders and dividers.
- Occasional accent color for important elements.

Suggested starting palette:

| Element | Color |
|---|---|
| Paper background | `#F5F2EA` |
| Primary text | `#171717` |
| Secondary text | `#686868` |
| Borders and dividers | `#C9C5BB` |
| Accent | `#9E2929` |

Avoid:

- Excessive gradients.
- Overly saturated colors.
- Unnecessary colorful backgrounds.
- Excessive shadows.
- Glassmorphism.
- Generic SaaS dashboard aesthetics.

### Typography

Typography is a fundamental part of the design.

Use a combination of:

**Serif fonts**
- Headlines
- Article titles
- Editorial emphasis

**Sans-serif fonts**
- Navigation
- Metadata
- Labels
- Supporting information

**Monospace fonts**
- Dates
- Timestamps
- Categories
- Technical metadata when appropriate

Headlines should have strong visual presence and establish clear content hierarchy.

Use appropriate font sizes, weights, line heights, and letter spacing to recreate the feeling of traditional newspaper typography.

### Layout Guidelines

Prefer editorial layouts over conventional card-based interfaces.

Design patterns may include:

- Large featured headlines.
- Multi-column article layouts.
- Asymmetric content grids.
- Full-width featured stories.
- Newspaper-style section headers.
- Horizontal dividing lines.
- Article metadata and publication dates.
- Image-and-text editorial compositions.
- Sidebar content and secondary stories.

Use CSS Grid and Flexbox through Tailwind utilities to achieve these layouts.

### Newspaper Components

Create reusable components where appropriate:

- Masthead
- NewspaperHeader
- NavigationBar
- SectionHeading
- FeaturedArticle
- ArticleCard
- ArticleMetadata
- EditorialGrid
- ArticleSidebar
- PublicationDate
- BreakingNewsBanner
- NewspaperFooter

### Interaction and Animation

Motion should complement the editorial experience rather than dominate it.

- Use subtle entrance animations.
- Use restrained hover transitions.
- Keep page transitions smooth.
- Avoid excessive movement.
- Preserve readability during animations.
- Use Three.js only for meaningful editorial visual experiences.

### Responsive Design

Maintain the newspaper aesthetic across all screen sizes.

**Desktop**
- Multi-column editorial layouts.
- Large headlines.
- Structured sidebars.
- Dense but readable content.

**Tablet**
- Reduced column counts.
- Balanced image and text compositions.
- Adapted navigation.

**Mobile**
- Single-column layouts.
- Compact masthead.
- Clear article hierarchy.
- Readable typography.
- Simplified navigation.

### Design Restrictions

- Do not default to generic rounded cards.
- Avoid excessive border radii.
- Avoid floating elements without a clear purpose.
- Avoid dashboard-like layouts.
- Do not sacrifice readability for visual decoration.
- Do not make every section look identical.
- Do not use unnecessary gradients or shadows.

**Final Design Principle:** The website should look and feel like a carefully designed modern newspaper: editorial, typographic, structured, minimal, and visually distinctive.

---

## 11. Performance Guidelines

Performance must be considered throughout development.

- Prioritize Astro's server-first rendering approach.
- Minimize unnecessary JavaScript shipped to the browser.
- Lazy-load heavy interactive components.
- Optimize images and assets.
- Avoid unnecessary dependencies.
- Avoid unnecessary global state subscriptions.
- Prevent memory leaks in animations and WebGL scenes.
- Use code splitting when appropriate.
- Avoid unnecessary component hydration.
- Test performance on mobile devices.
- Prefer lightweight solutions when possible.

---

## 12. Accessibility Guidelines

Every interface must be usable and accessible.

- Use semantic HTML.
- Provide accessible names for interactive elements.
- Add meaningful alternative text to images.
- Maintain sufficient color contrast.
- Support keyboard navigation.
- Provide visible focus indicators.
- Use appropriate ARIA attributes when necessary.
- Do not rely solely on color to communicate information.
- Respect reduced-motion preferences.

---

## 13. Development Workflow

Before implementing a feature:

1. Understand the existing project structure.
2. Identify whether the functionality belongs to an existing feature.
3. Check for reusable components and utilities.
4. Determine whether local state or Nano Stores is appropriate.
5. Identify whether client-side interactivity is actually necessary.
6. Follow existing naming and styling conventions.
7. Follow the established newspaper-inspired design direction.

After implementation:

1. Check TypeScript errors.
2. Check for unused imports and variables.
3. Verify responsive behavior.
4. Test interactive functionality.
5. Check browser console errors.
6. Verify accessibility.
7. Run the project's available linting and build commands.
8. Verify that the production build succeeds.

---

## 14. Important Rules for AI Coding Agents

When modifying this project:

- Always inspect existing files before creating new ones.
- Follow the established architecture.
- Do not introduce a different state management library without approval.
- Do not introduce unnecessary dependencies.
- Do not move files or restructure directories without a clear reason.
- Do not duplicate existing functionality.
- Do not overengineer simple requirements.
- Do not use Three.js when ordinary CSS or HTML can achieve the same result.
- Do not use Motion for simple interactions that CSS can handle.
- Use Tailwind CSS as the default styling solution.
- Maintain the newspaper-inspired editorial design.
- Avoid generic SaaS layouts and excessive card-based designs.
- Keep changes focused on the requested task.
- Update relevant documentation when architectural decisions change.
- Follow the project's installed package versions and existing conventions.
- Never assume a dependency is installed without checking the project configuration.

---

## 15. Definition of Done

A frontend implementation is considered complete when:

- [ ] It follows the feature-based architecture.
- [ ] Components are modular and reusable where appropriate.
- [ ] TypeScript errors are resolved.
- [ ] No unnecessary dependencies were introduced.
- [ ] Responsive layouts work correctly.
- [ ] Interactive elements function correctly.
- [ ] Accessibility considerations are addressed.
- [ ] No obvious console errors remain.
- [ ] Production build succeeds.
- [ ] Existing functionality is not unintentionally broken.
- [ ] Tailwind CSS conventions are followed.
- [ ] Newspaper-inspired design consistency is maintained.
- [ ] Animations and 3D experiences do not compromise performance.

---

## Final Principle

Build a modular, feature-oriented frontend that remains easy to understand, extend, and maintain.

Prefer simple solutions over unnecessary abstractions. Use each technology only where it provides real value.

The visual experience should consistently reflect a modern newspaper-inspired editorial identity, combining traditional print aesthetics with contemporary web technologies.

**Architecture first. Performance always. Editorial design throughout.**