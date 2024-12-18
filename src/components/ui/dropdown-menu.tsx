"use client"

import * as React from "react"
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu"

import { cn } from "@/lib/utils"

const DropdownMenu = RadixDropdownMenu.Root
const DropdownMenuTrigger = RadixDropdownMenu.Trigger

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Content>,
  React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <RadixDropdownMenu.Portal>
    <RadixDropdownMenu.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md bg-white py-1",
        "text-gray-700 shadow-lg ring-1 ring-gray-200",
        "data-[state=open]:animate-in",
        "data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0",
        "data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95",
        "data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2",
        "data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </RadixDropdownMenu.Portal>
))

DropdownMenuContent.displayName = RadixDropdownMenu.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Item>,
  React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <RadixDropdownMenu.Item
    ref={ref}
    className={cn(
      "text-gray-700 focus:bg-gray-100",
      "relative flex cursor-default focus:text-black",
      "select-none items-center gap-2 rounded-none px-3 py-1.5 text-sm",
      "outline-none transition-colors data-[disabled]:pointer-events-none",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))

DropdownMenuItem.displayName = RadixDropdownMenu.Item.displayName

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem }
