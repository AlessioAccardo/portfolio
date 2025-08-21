import Link from "next/link";

function HeaderLink({ name, image }) {
    return (
        <div className="inline-block group">
            <Link href="/" className="relative flex flex-col justify-center items-center">
                <span className="z-10 text-2xl pb-1"><i className={image}/></span>
                {/* testo del link */}
                <span className="z-10">{name}</span>

                {/* underline: assoluta, h-1 = spessa, origin-right di base, scale-x-0 -> group-hover scale-x-100 */}
                <span
                className="
                    absolute left-0 -bottom-2 block h-1 w-full
                    bg-violet-600
                    origin-right scale-x-0 transform
                    transition-transform duration-400
                    ease-in-out
                    group-hover:origin-left group-hover:scale-x-100
                    group-focus-within:scale-x-100
                    motion-reduce:transition-none
                "
                aria-hidden="true"
                />
            </Link>
        </div>
    );
}

export default HeaderLink;