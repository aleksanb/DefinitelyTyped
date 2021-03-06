import * as spawn from 'cross-spawn';
import * as cp from 'child_process';

const p1: cp.ChildProcess = spawn('my-cmd', ['foo', 'bar']);
const pw: cp.ChildProcess = spawn('my-cmd', ['foo', 'bar'], {env: process.env});

pw.on('error', (err: Error) => {
    console.log(err);
});

const r1: Error = spawn.sync('foo').error;
const r2: string[] = spawn.sync('foo').output;
const r3: Buffer = spawn.sync('foo').stdout;
const r4: Buffer = spawn.sync('foo').stderr;
const r5: number = spawn.sync('foo').status;
const r6: string = spawn.sync('foo').signal;
const r7: string = spawn.sync('foo', {encoding: 'utf8'}).stdout;

spawn.sync('foo', ['bar']);
spawn.sync('foo', ['bar'], {stdio: 'inherit'});
