---
date: '2022-09-22T05:43:54.960Z'
title: Comply 'children' in TypeScript
tagline: Solve 'children'
preview: Comply 'children' in TypeScript with types provided by React
image: /images/project1_img.png
---

# How you deal with `children` in TypeScript

# 1
Use `React.ReactNode`

Ex.
```
type Props = {
  children: React.ReactNode;
}
```

# 2
Use `React.PropsWithChildren<P>`

> type PropsWithChildren<P> = P & {children? : ReactNode}  

This provides 'children' for us.

Ex.
```
type Props = React.PropsWithChildren<{myprop:any}>
```
If you're using your component like this
```
<FancyButton>Click</FancyButton>
```
Then the error occurs:

``Property 'myprop' is missing in type '{ children: string; className: string; }' but required in type 'Pick<Props, "myprop" | "key" | keyof HTMLAttributes<HTMLButtonElement>>'.``

And even if you specify `key` and attributes of <button> element like this:
```
<FancyButton key={something} type="submit">Hi</FancyButton>
```
It *still* complains because your `myprop` has **not** specified **yet**. When you don't particularily need any props, you just can go like this:
```
type Props = React.PropsWithChildren<{}>
```
The error goes away and you can still use children out of the box with `type PropsWithChildren<P> = P & {children? : ReactNode}` mensioned earlier.


--- 

Have a good day!

