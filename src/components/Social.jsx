
function Social() {
    return (
        <>
            <section className="flex flex-col items-center justify-center w-[100%] my-[1rem] h-auto font-serif relative select-none overflow-hidden">
                <div className="flex flex-row items-center justify-evenly w-1/2 h-auto px-[1.45rem] py-[0.65rem] bg-[#eee2ca] border text-[1rem] font-semibold border-[#c8967d] max-[440px]:text-xs">
                    <a href="https://github.com/rimsha-shoukat">
                        <h1 className="cursor-pointer font-semibold">GitHub</h1>
                    </a>
                    <a href="https://www.linkedin.com/in/rimsha-shoukat">
                        <h1 className="cursor-pointer font-semibold">LinkedIn</h1>
                    </a>
                </div>
                <h1 className="mt-[2rem]">copyright@rimsha</h1>
            </section>
        </>
    )
}

export default Social;