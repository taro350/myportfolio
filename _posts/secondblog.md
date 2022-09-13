---
date: '2022-07-24T11:50:54.000Z'
title: Use curl with VPN interface
tagline: If you're using VPN and want to use the interface with curl
preview: >-
  How curl works with VPN interface  
image: >-
  https://images.unsplash.com/photo-1656188505561-19f1a1b6cda8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80
---

# :weight_lifting_man: utun

```
curl --interface utun<n>
```

If you want to see which inteface on your computer is available, use `ifconfig` or `ip`. 
```
$ ifconfig
```
The response is:
```
lo0 : flags=...
gif0 : flags=...
```

In my case, I use macbook so I prefer to choose `ip`.
```
ip l show
```
The response is:
```
lo0 : flags=...
gif0 : flags=...
```

These two shows pretty much similar response but the rich of functionality of either one is different and become significant as the way you use it changes.  

# :woman_cartwheeling: scutil ("System Configuration Utility")

```
scutil --nwi 
```
`--nwi` means "Network Interface Information". If you take a close look at the response, you'll find `utun<n>` in "IPv4 network interface information". That's where more detail of VPN interface resides. 
```
...
IPv4 network interface information
   utun2 : flags      : 0x5 (IPv4,DNS)
           address    : 10.5.0.2
           VPN server : 181.214.x.x
           reach      : 0x00000003 (Reachable,Transient Connection)
     en0 : flags      : 0x7 (IPv4,IPv6,DNS)
...
```

---

There you have it:wink: Have a great day!