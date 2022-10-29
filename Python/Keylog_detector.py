from subprocess import Popen, PIPE
import os
import signal
from sys import stdout


potential_keyloggers = []


class Process(object):
    def __init__(self, process_info):
        self.name = process_info[0]
        self.pid = process_info[1]


def kill_logger(pid):
    stdout.write('\n\n Do you want to kill this process ? (y/n) ')
    res = input().lower()

    if (res == 'y'):
        # signal.SIGKILL = 9
        os.kill(int(pid), 9)


def get_process_list():
    process_list = []

# tasklist to see processes in Windows cmd
# subprocess PIPE to get output of child process as a string
    sub_process = Popen(['tasklist'], shell=False, stdout=PIPE)

    # Get rid of first line that is the header and spaced names
    sub_process.stdout.readline()
    sub_process.stdout.readline()
    sub_process.stdout.readline()

    for line in sub_process.stdout:
        # all lists have length 6 for no spaced names
        process_info = line.decode("utf-8").replace("b'", "").split()

        if len(process_info) == 6:
            process_list.append(Process(process_info))

    logger_detected = 0

    for process in process_list:
        for logger in potential_keyloggers:
            if (process.name.find(logger) > -1):

                print(process.pid)
                stdout.write('KeyLogger Detected : \n The following process may be a key logger : \n\n' +
                             process.name + ' ----> ' + logger)
                kill_logger(process.pid)
                logger_detected = 1

    if logger_detected == 0:
        print('No KeyLogger was Detected ... exiting')

    exit()


if __name__ == '__main__':
    get_process_list()
