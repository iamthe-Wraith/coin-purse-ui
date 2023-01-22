global.process = global.process || {} as NodeJS.Process;
global.process.env = global.process.env || {} as NodeJS.ProcessEnv;

export default global;