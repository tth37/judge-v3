export const lang =  {
    name: "rust",
    sourceFileName: "main.rs",
    fileExtension: "rs",
    binarySizeLimit: 10 * 1024 * 1024, // 10 MiB

    // Note that these two paths are in the sandboxed environment.
    compile: (sourcePath, outputDirectory) => ({
        // To customize the compilation process,
        // write a shell script or some other stuff, 
        // and put it to your sandbox.
        executable: "/usr/bin/rustc",
        parameters: [
            "rustc",
            "-o",
            `${outputDirectory}/a.out`,
            `-Copt-level=3`,
            "--color=always",
            "--cfg",
            "ONLINE_JUDGE",
            sourcePath
        ],
        time: 10000,
        memory: 1024 * 1024 * 1024 * 2,
        process: 30,
        // This is just a redirection. You can simply ignore this
        // if you can specify custom location for message output
        // in the parameter of the compiler, or have redirected the compilation 
        // message to somewhere.
        // An example will be available soon.
		stdout: `${outputDirectory}/message.txt`,
        stderr: `${outputDirectory}/message.txt`,
        // We will read this file for message in the output directory.
        messageFile: 'message.txt',
        workingDirectory: outputDirectory
    }),

    run: (binaryDirectory: string,
        workingDirectory: string,
        time: number,
        memory: number,
        stdinFile = null,
        stdoutFile = null,
        stderrFile = null
    ) => ({
        executable: `${binaryDirectory}/a.out`,
        parameters: [],
        time: time,
        memory: memory,
        process: 1,
        stdin: stdinFile,
        stdout: stdoutFile,
        stderr: stderrFile,
        workingDirectory: workingDirectory
    })
};
