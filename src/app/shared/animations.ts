import { animate, animation, keyframes, style, transition, trigger, useAnimation } from "@angular/animations"

export const slideInUp = animation(
    [
        // 指定元素未入场前的样式
        style({ opacity: 0, transform: "translateY(40px)" }),
        // 指定元素入场后的样式及运动参数
        animate('{{ duration }} {{ delay }} {{ easing }}')
    ],
    {
        params: {
            duration: "400ms",
            delay: "0s",
            easing: "ease-out"
        }
    }
)

export const slideOutLeft = animation([
    // animate(600, style({ opacity: 0, transform: "translateX(100%)" }))
    // animate('600ms 0s ease-out', style({ opacity: 0, transform: "translateX(100%)" }))
    animate(
        600,
        keyframes([
            style({ offset: 0.3, transform: "translateX(-80px)" }),
            style({ offset: 1, transform: "translateX(100%)" })
        ])
    )
])

export const slide = trigger("slide", [
    transition(":enter", useAnimation(slideInUp, { params: { duration: "600ms" } })),
    transition(":leave", useAnimation(slideOutLeft))
])