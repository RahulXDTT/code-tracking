"use client";
import * as Sentry from "@sentry/nextjs";
import Error from "next/error";
import { useEffect } from "react";
export default function GlobalError({ error }) {
useEffect(() => { Sentry.captureException(error); }, [error]);
return (
<html>
I
<body>
<Error />
</body>
</html>
);
}