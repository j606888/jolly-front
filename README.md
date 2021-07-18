### Questions

1. `./src/store/auth-context.js` 因為要把 name, email, token 等等的全部都存在 localStorage 裏面，所以會出現很多冗長且重複的動作。是否需要用到 useReducer 來簡化？還是有其他做法？

2. `./src/components/Outer/` 這個是因為 Navbar 屬於 `position: fixed`，所以有使用到 Navbar 的 pages 都需要使用一個 Outer 來做個 margin-top。似乎可以把 Navbar 直接放在 Outer 裏面？或是有其他更好的做法？

3. `./src/App.js` 我看的教學是用 `{ AuthCtx && privateComponent }` 來保護特定 route 的。但也有看過其他教學是用一個 PrivateRoute 來做的。不確定哪個比較好還是都可以？ https://reactrouter.com/web/example/auth-workflow

