import './style.css';

interface CategoriesProps {
  categorieName: any;
}

const Categories = ({ categorieName }: CategoriesProps) => {
  return (
    <div className="categorie container">
      <span>{categorieName}</span>
    </div>
  );
};

export default Categories;
