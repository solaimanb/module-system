"use client";

import { useEffect } from "react";
import { toast } from "sonner";

interface AlertProps {
  type?: "success" | "error" | "warning" | "info";
  message?: string;
}

export const AlertModule: React.FC<AlertProps> = ({
  type = "info",
  message = "This is an info alert",
}) => {
  useEffect(() => {
    const toastStyles = {
      success: {
        style: {
          background: "#dcfce7",
          color: "#15803d",
        },
      },
      error: {
        style: {
          background: "#fee2e2",
          color: "#b91c1c",
        },
      },
      warning: {
        style: {
          background: "#fef3c7",
          color: "#b45309",
        },
      },
      info: {
        style: {
          background: "#dbeafe",
          color: "#1d4ed8",
        },
      },
    };

    toast(message, {
      ...(toastStyles[type] || toastStyles.info),
      duration: 4000,
    });
  }, [type, message]);

  return null;
};
