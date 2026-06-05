import React, { forwardRef } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface BoxCenteredProps extends BoxProps {
  children: React.ReactNode;
}

export const BoxCentered = forwardRef<HTMLElement, BoxCenteredProps>(
  ({ children, ...props }, ref) => (
    <Box ref={ref} display="flex" justifyContent="center" alignItems="center" {...props}>
      {children}
    </Box>
  )
);

BoxCentered.displayName = "BoxCentered";
