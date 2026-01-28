<template>
    <div class="flex justify-center min-h-dvh p-12 sm:p-16 md:p-20 lg:p-28 xl:p-36 2xl:p-44 relative">
        <div class="animate-pulse [animation-duration:10s] absolute blur-3xl -top-1/6 left-0 h-1/2 w-full md:w-1/2 overflow-hidden">
            <div class="bg-linear-to-r from-amber-400 to-rose-400 opacity-20 dark:opacity-20 rotate-35 size-full" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
        <div class="flex flex-col gap-y-12 items-center text-center w-2xl z-10">
            <div class="flex flex-col gap-y-4 items-center">
                <h2 class="font-semibold text-zinc-500 dark:text-zinc-400 text-2xl">I'm Eduardo Agostini</h2>
                <h1 class="font-bold leading-tight text-5xl">Software Engineer, Creator of <a class="underline underline-offset-8 decoration-wavy decoration-amber-400 whitespace-nowrap transition-colors hover:decoration-rose-400" @click.prevent href="https://nottasocket.com" target="_blank">Notta Socket</a> & CEO @ <a class="underline underline-offset-8 decoration-wavy decoration-amber-400 whitespace-nowrap transition-colors hover:decoration-rose-400" href="https://nottaboss.co.nz" target="_blank">Notta Boss</a></h1>
            </div>
            <div class="flex flex-col gap-y-6 text-zinc-500/90 dark:text-zinc-300/90 leading-loose text-2xl">
                <p>I’m a software engineer and entrepreneur based in Auckland, New Zealand. I’ve been writing code since I was 14, which is a polite way of saying I’ve been voluntarily wrestling with computers for most of my life.</p>
                <p>Most of my time goes into Notta Boss, where I design and build custom software, SaaS platforms, and slightly over-engineered systems that actually behave in production. I also work as a consultant for teams who need clarity, better architecture, or someone to tell them their “temporary fix” has turned into core infrastructure.</p>
                <p>Right now, I’m building Notta Socket, a real-time platform for developers who are tired of juggling WebSocket servers, pricing surprises, and cryptic error messages. My goal is simple: ship software that scales, makes sense, and doesn’t make developers question all their career decisions at 2 a.m.</p>
            </div>
            <div class="flex items-center gap-x-6 justify-center">
                <a class="transition-colors hover:text-amber-400" href="mailto:eduardo@nottaboss.co.nz?subject=Knock%20Knock">
                    <svg class="size-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="M3 7l9 6l9-6" />
                    </svg>
                </a>
                <a class="transition-colors hover:text-blue-400" href="https://linkedin.com/in/eagostini" target="_blank">
                    <svg class="size-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <path d="M8 11v5" />
                        <path d="M8 8v.01" />
                        <path d="M12 16v-5" />
                        <path d="M16 16v-3a2 2 0 0 0-4 0" />
                    </svg>
                </a>
<!--                <a class="transition-colors hover:text-rose-400" href="https://dribbble.com/eagostini" target="_blank">-->
<!--                    <svg class="size-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
<!--                        <circle cx="12" cy="12" r="9" />-->
<!--                        <path d="M9 3.6c5 6 7 10.5 7.5 16.2" />-->
<!--                        <path d="M6.4 19c3.5-3.5 6-6.5 14.5-6.4" />-->
<!--                        <path d="M3.1 10.75c5 0 9.814-.38 15.314-5" />-->
<!--                    </svg>-->
<!--                </a>-->
                <a class="transition-colors hover:text-purple-400" href="https://github.com/eagostini" target="_blank">
                    <svg class="size-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
        </div>
        <div class="animate-pulse [animation-duration:8s] absolute blur-3xl bottom-0 right-0 h-1/2 w-full md:w-1/2 overflow-hidden">
            <div class="bg-linear-to-r from-rose-400 to-blue-400 opacity-30 dark:opacity-20 rotate-[270] size-full" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
