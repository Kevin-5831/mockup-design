/**
 * MockupAI Design System Utilities
 * 
 * This file provides easy-to-use presets and utilities for consistent styling
 * across the application. Use these instead of writing custom Tailwind classes.
 */

// Button Presets - Use these for common button patterns
export const buttonPresets = {
  // Primary actions
  primary: "primary",
  
  // Secondary actions
  secondary: "secondary",
  
  // Subtle actions
  ghost: "ghost",
  
  // Outlined buttons
  outline: "outline",
  
  // Destructive actions
  danger: "destructive",
  
  // Success actions
  success: "success",
  
  // Warning actions
  warning: "warning",
} as const;

// Button Sizes - Use these for consistent sizing
export const buttonSizes = {
  small: "sm",
  medium: "default", 
  large: "lg",
  extraLarge: "xl",
} as const;

// Badge Presets - Use these for status indicators
export const badgePresets = {
  // Status badges
  active: "success",
  pending: "warning", 
  error: "destructive",
  info: "info",
  
  // Credit badges
  credits: "primary",
  plan: "outline",
  
  // General purpose
  default: "default",
  secondary: "secondary",
} as const;

// Card Presets - Use these for different card types
export const cardPresets = {
  // Standard cards
  default: "default",
  
  // Elevated cards (modals, important content)
  elevated: "elevated",
  
  // Flat cards (subtle containers)
  flat: "flat",
  
  // Outlined cards (forms, inputs)
  outlined: "outlined",
  
  // Invisible cards (layout only)
  ghost: "ghost",
} as const;

// Color Utilities - Use these for consistent colors
export const colors = {
  // Brand colors
  brandPrimary: "text-brand-primary",
  brandSecondary: "text-brand-secondary", 
  brandAccent: "text-brand-accent",
  
  // Semantic colors
  success: "text-success",
  warning: "text-warning", 
  error: "text-destructive",
  info: "text-info",
  
  // Text colors
  primary: "text-foreground",
  secondary: "text-muted-foreground",
  muted: "text-muted-foreground",
  
  // Background colors
  bgPrimary: "bg-background",
  bgSecondary: "bg-secondary",
  bgMuted: "bg-muted",
} as const;

// Spacing Utilities - Use these for consistent spacing
export const spacing = {
  // Padding
  paddingNone: "p-0",
  paddingSmall: "p-3",
  paddingMedium: "p-6",
  paddingLarge: "p-8",
  
  // Margin
  marginNone: "m-0",
  marginSmall: "m-3", 
  marginMedium: "m-6",
  marginLarge: "m-8",
  
  // Gap
  gapSmall: "gap-2",
  gapMedium: "gap-4",
  gapLarge: "gap-6",
} as const;

// Shadow Utilities - Use these for consistent shadows
export const shadows = {
  none: "shadow-none",
  small: "shadow-sm",
  medium: "shadow-md", 
  large: "shadow-lg",
  extraLarge: "shadow-xl",
} as const;

// Border Radius Utilities - Use these for consistent border radius
export const borderRadius = {
  none: "rounded-none",
  small: "rounded-sm",
  medium: "rounded-md",
  large: "rounded-lg", 
  extraLarge: "rounded-xl",
  full: "rounded-full",
} as const;

// Typography Utilities - Use these for consistent text styling
export const typography = {
  // Headings
  headingLarge: "text-3xl font-heading font-bold",
  headingMedium: "text-2xl font-heading font-semibold",
  headingSmall: "text-xl font-heading font-semibold",
  
  // Body text
  bodyLarge: "text-lg font-body",
  bodyMedium: "text-base font-body",
  bodySmall: "text-sm font-body",
  
  // Captions
  caption: "text-xs font-body text-muted-foreground",
  
  // Special
  gradient: "text-gradient",
} as const;

// Layout Utilities - Use these for common layouts  
export const layout = {
  // Flex utilities
  flexCenter: "flex items-center justify-center",
  flexBetween: "flex items-center justify-between",
  flexStart: "flex items-center justify-start",
  flexEnd: "flex items-center justify-end",
  flexCol: "flex flex-col",
  flexColCenter: "flex flex-col items-center justify-center",
  
  // Grid utilities
  gridCols2: "grid grid-cols-2",
  gridCols3: "grid grid-cols-3", 
  gridCols4: "grid grid-cols-4",
  gridResponsive: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
} as const;

// Animation Utilities - Use these for consistent animations
export const animations = {
  fadeIn: "animate-in fade-in duration-200",
  fadeOut: "animate-out fade-out duration-200",
  slideUp: "animate-in slide-in-from-bottom duration-300",
  slideDown: "animate-in slide-in-from-top duration-300",
  scale: "hover:scale-105 transition-transform duration-200",
} as const;

/**
 * Helper function to combine design system utilities
 * 
 * @example
 * ```tsx
 * <Button className={combine(buttonPresets.primary, buttonSizes.large)}>
 *   Click me
 * </Button>
 * ```
 */
export function combine(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Common component presets - Use these for frequent patterns
 */
export const componentPresets = {
  // Button combinations
  primaryButton: combine("primary", "default"),
  secondaryButton: combine("secondary", "default"), 
  smallPrimaryButton: combine("primary", "sm"),
  smallSecondaryButton: combine("secondary", "sm"),
  
  // Badge combinations  
  statusBadge: combine("success", "sm"),
  creditsBadge: combine("primary", "default"),
  planBadge: combine("outline", "default"),
  
  // Card combinations
  contentCard: combine("default"),
  elevatedCard: combine("elevated"),
  formCard: combine("outlined"),
} as const;

export type ButtonPreset = keyof typeof buttonPresets;
export type ButtonSize = keyof typeof buttonSizes;
export type BadgePreset = keyof typeof badgePresets;
export type CardPreset = keyof typeof cardPresets;