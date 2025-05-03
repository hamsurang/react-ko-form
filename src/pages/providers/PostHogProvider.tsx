import { useEffect } from "react"
import posthog from "posthog-js"
import { Router } from "next/router"
import { PostHogProvider as PostHogProviderBase } from "posthog-js/react"

interface PostHogProviderProps {
  children: React.ReactNode
}

export const PostHogProvider = ({ children }: PostHogProviderProps) => {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      api_host:
        process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
      person_profiles: "identified_only",
      loaded: (posthog) => {
        if (process.env.NODE_ENV === "development") posthog.debug()
      },
    })

    const handleRouteChange = () => posthog?.capture("$pageview")

    Router.events.on("routeChangeComplete", handleRouteChange)

    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [])
  return <PostHogProviderBase client={posthog}>{children}</PostHogProviderBase>
}
