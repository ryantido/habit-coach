export const SideBar = ({ isDrawerOpen }: { isDrawerOpen: boolean }) => {
  return (
    <div>{ isDrawerOpen ? "SideBar" : ""}</div>
  )
}
