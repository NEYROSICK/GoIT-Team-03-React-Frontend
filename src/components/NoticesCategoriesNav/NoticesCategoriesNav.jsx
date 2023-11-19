import { NavContaier, NavLi, NavList, StyledLink } from "./NoticesCategoriesNav.styled";
import categories from "./categories";
import { useLocation, Link } from 'react-router-dom';


const NoticesCategoriesNav = () => {
    const { pathname, search } = useLocation();
    return (
        <NavContaier>
            <NavList>
                {categories.map(({id, to, text}) => (
                    <NavLi key={id}>
                        <StyledLink to={ {pathname: to, search}} >
                            {text}
                        </StyledLink>
                    </NavLi>
                ))}
            </NavList>
        </NavContaier>
    )
}

export default NoticesCategoriesNav;