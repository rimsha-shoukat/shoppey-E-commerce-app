
function Social() {
    return (
        <>
            <section className="flex flex-col items-center justify-center w-[100%] my-[1rem] h-auto  relative select-none overflow-hidden">
                <div className="flex flex-row items-center justify-evenly w-1/2 h-auto px-[1.45rem] py-[0.65rem] bg-[#eee2ca] border text-[1rem] font-semibold border-[#c8967d] max-[440px]:text-xs">
                    <a href="https://github.com/rimsha-shoukat">
                        <h1 className="cursor-default font-semibold">GitHub</h1>
                    </a>
                    <a href="https://www.linkedin.com/in/rimsha-shoukat">
                        <h1 className="cursor-default font-semibold">LinkedIn</h1>
                    </a>
                </div>
                <a className="mt-[2rem] border-0">copyright@rimsha</a>
            </section>
        </>
    )
}

export default Social;