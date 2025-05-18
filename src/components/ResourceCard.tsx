
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
  category?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  link,
  linkText,
  category
}) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        {category && (
          <div className="text-xs font-medium text-brand-purple mb-2 uppercase tracking-wide">
            {category}
          </div>
        )}
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 line-clamp-4">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-brand-purple hover:bg-brand-purple-dark">
          <Link to={link}>{linkText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
