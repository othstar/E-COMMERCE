import './style.css';

interface CategoriesProps {
  categorieName: string;
}

const Categories = ({ categorieName }: CategoriesProps) => {
  return (
    <div className="categorie container">
      <span>{categorieName}</span>
    </div>
  );
};

export default Categories;
