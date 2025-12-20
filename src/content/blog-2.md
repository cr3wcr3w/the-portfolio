---
title: Scripting with Bash
description: This is a short summary of my first blog post.
date: 2025-12-20
tags: [bash, scripting]
---

# Scripting with Bash

---

### output redirection

In Bash, you can capture the output of a command and save it to a file using output redirection `>`.

example

```bash
ping google.com -c 1 > ip.txt
```

output

```bash
user:~$ ping google.com -c 1 > ip.txt
user:~$ ls
ip.txt
user:~$ cat ip.txt
PING google.com (142.251.221.14) 56(84) bytes of data.
64 bytes from mnl08s02-in-f14.1e100.net (142.251.221.14): icmp_seq=1 ttl=115 time=16.6 ms

--- google.com ping statistics ---
1 packets transmitted, 1 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 16.637/16.637/16.637/0.000 ms

```

---

### grep

grep is used to search and filter that match a pattern from the input

example

```bash
user:~$ ping google.com -c 1 > ip.txt | grep "64 bytes"
```

note
The pipe `|` is used to send the output of one command directly into another command as input.

---

### cut

cut is used to extract specific columns (fields) from each line of input, based on a delimiter.

example

```bash
user:~$ cat ip.txt | grep "64 bytes" | cut -d " " -f 5
(142.251.220.174):
```

note
`-d` delimiter
what character to use to split the line.

```bash
1: 64
2: bytes
3: from
4: mnl08s02-in-f14.1e100.net
5: (142.251.220.174):
```

`-f` field
which field number to extract.

```bash
cut -d " " -f 5
```

Split each line by spaces and print only the 5th column

---

### tr

used to translate, replace, or delete characters from standard input.

sample

```bash
user:~$ cat ip.txt | grep "64 bytes" | cut -d " " -f 5 | tr -d "():"
142.251.220.174
```

---

### ipsweep

```bash
user:~$ cat ipsweep.sh
#!/bin/bash

for ip in {1..254}; do
    ping -c 1 $1.$ip | grep "64 bytes" | cut -d " " -f 4 | tr -d ":" &
done
user:~$ chmod +x ipsweep.sh
user:~$ ./ipsweep.sh 192.168.0
192.168.0.1
192.168.0.2
192.168.0.3
```

note
`&` when you put this at the end of the command, Bash does not wait for that command to finish.
Instead, it runs it in parallel (background job) and immediately continues to the next line.

---

### oneline

```bash
user:~$ ./ipsweep.sh 192.168.0 > target.txt
user:~$ cat target.txt
192.168.0.1
192.168.0.101
192.168.0.102
192.168.0.113
192.168.0.109
192.168.0.104
192.168.0.110
192.168.0.103
192.168.0.111
user:~$  for ip in $(cat target.txt); do sudo nmap -sS -p 80 -T4 $ip & done
Starting Nmap 7.94SVN ( https://nmap.org ) at 2025-12-20 09:49 PST
Starting Nmap 7.94SVN ( https://nmap.org ) at 2025-12-20 09:49 PST
Starting Nmap 7.94SVN ( https://nmap.org ) at 2025-12-20 09:49 PST
Starting Nmap 7.94SVN ( https://nmap.org ) at 2025-12-20 09:49 PST
Starting Nmap 7.94SVN ( https://nmap.org ) at 2025-12-20 09:49 PST
Starting Nmap 7.94SVN ( https://nmap.org ) at 2025-12-20 09:49 PST
Starting Nmap 7.94SVN ( https://nmap.org ) at 2025-12-20 09:49 PST
Starting Nmap 7.94SVN ( https://nmap.org ) at 2025-12-20 09:49 PST
Starting Nmap 7.94SVN ( https://nmap.org ) at 2025-12-20 09:49 PST
etc...
```
