import CategotyItem from './CategoryItem';

function CategoryList({ catalog = [] }) {
    return (
        <div className='list'>
            {catalog.map((item) => (
                <CategotyItem
                    key={item.idCategory}
                    {...item}
                />
            ))}
        </div>
    );
}

export default CategoryList;
