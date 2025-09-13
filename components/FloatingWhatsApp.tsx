'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function FloatingWhatsApp() {
  const phone = '94702169762'; // +94 70 216 9762
  const message = encodeURIComponent('Hello! I would like to know more about studying in New Zealand.');
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-5 right-5 z-[60]"
      aria-label="Chat on WhatsApp"
    >
      {/* Attention wiggle every few seconds */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: [0, 0, 0, -8, 8, -5, 5, -2, 2, 0], scale: [1, 1, 1, 1.04, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 7 }}
      >
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl ring-1 ring-black/10"
        >
          {/* Glow aura */}
          <span
            className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-40 blur-xl transition-opacity duration-300 group-hover:opacity-60"
            aria-hidden="true"
          />
          {/* WhatsApp SVG icon */}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="h-7 w-7 drop-shadow-sm"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M19.11 17.13a4.65 4.65 0 0 1-1.25-.29c-.39-.16-.89-.35-1.53-.68-2.7-1.38-4.45-4.59-4.58-4.8-.13-.21-1.09-1.45-1.09-2.77 0-1.32.69-1.96.94-2.23.24-.27.52-.34.69-.34h.49c.16 0 .37-.06.58.44.21.5.7 1.73.76 1.85.06.13.09.28.02.45-.06.17-.09.27-.2.41-.1.14-.22.31-.31.42-.1.1-.2.22-.09.43.1.21.45.74.96 1.2.66.59 1.23.77 1.44.86.21.1.33.08.45-.05.12-.13.52-.61.66-.82.14-.21.28-.17.47-.1.19.06 1.21.57 1.42.67.21.1.35.15.4.24.06.09.06.53-.12 1.04-.17.51-.97 1.41-1.16 1.62-.19.21-.46.22-.65.2Zm-3.2 7.7h-.01a9.2 9.2 0 0 1-4.43-1.16l-.32-.17-3.28.86.88-3.2-.21-.33a9.34 9.34 0 1 1 7.38 4Z" />
          </svg> */}
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
</svg>

          {/* Ping indicator */}
          <span className="pointer-events-none absolute -top-1 -right-1 inline-flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
          </span>

          {/* Hover tooltip label */}
          <span
            className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 translate-x-2 opacity-0 select-none whitespace-nowrap rounded-xl bg-black/80 px-3 py-1 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          >
            Chat on WhatsApp
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
