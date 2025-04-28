
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

type DiseaseCategory = "cardiovascular" | "digestive" | "oncology" | "infectious" | "metabolic";

const Diseases = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories: Record<DiseaseCategory, string> = {
    cardiovascular: "Сердечно-сосудистые",
    digestive: "Пищеварительная система",
    oncology: "Онкологические",
    infectious: "Инфекционные",
    metabolic: "Метаболические"
  };

  const diseases = [
    {
      id: 1,
      name: "Ишемическая болезнь сердца",
      category: "cardiovascular" as DiseaseCategory,
      description: "Заболевание, вызванное уменьшением кровоснабжения сердечной мышцы из-за атеросклероза коронарных артерий.",
      bloodGroups: [
        { group: "A", risk: "повышенный", details: "На 20% выше среднего риска" },
        { group: "AB", risk: "повышенный", details: "На 23% выше среднего риска" },
        { group: "0", risk: "пониженный", details: "На 14% ниже среднего риска" },
        { group: "B", risk: "средний", details: "Близко к среднему популяционному риску" }
      ]
    },
    {
      id: 2,
      name: "Тромбоз",
      category: "cardiovascular" as DiseaseCategory,
      description: "Образование кровяных сгустков (тромбов) в кровеносных сосудах, препятствующих нормальному кровотоку.",
      bloodGroups: [
        { group: "AB", risk: "повышенный", details: "На 25% выше среднего риска" },
        { group: "A", risk: "повышенный", details: "На 15% выше среднего риска" },
        { group: "0", risk: "пониженный", details: "На 35% ниже среднего риска" },
        { group: "B", risk: "средний", details: "Близко к среднему популяционному риску" }
      ]
    },
    {
      id: 3,
      name: "Язвенная болезнь желудка",
      category: "digestive" as DiseaseCategory,
      description: "Хроническое заболевание, характеризующееся образованием язв на слизистой оболочке желудка.",
      bloodGroups: [
        { group: "0", risk: "повышенный", details: "На 35% выше среднего риска" },
        { group: "A", risk: "пониженный", details: "На 20% ниже среднего риска" },
        { group: "B", risk: "средний", details: "Близко к среднему популяционному риску" },
        { group: "AB", risk: "средний", details: "Близко к среднему популяционному риску" }
      ]
    },
    {
      id: 4,
      name: "Рак желудка",
      category: "oncology" as DiseaseCategory,
      description: "Злокачественная опухоль, развивающаяся из клеток слизистой оболочки желудка.",
      bloodGroups: [
        { group: "A", risk: "повышенный", details: "На 20% выше среднего риска" },
        { group: "AB", risk: "повышенный", details: "На 15% выше среднего риска" },
        { group: "0", risk: "средний", details: "Близко к среднему популяционному риску" },
        { group: "B", risk: "средний", details: "Близко к среднему популяционному риску" }
      ]
    },
    {
      id: 5,
      name: "Сахарный диабет 2 типа",
      category: "metabolic" as DiseaseCategory,
      description: "Метаболическое заболевание, характеризующееся высоким уровнем сахара в крови в контексте инсулинорезистентности.",
      bloodGroups: [
        { group: "A", risk: "повышенный", details: "На 10% выше среднего риска" },
        { group: "B", risk: "повышенный", details: "На 21% выше среднего риска" },
        { group: "0", risk: "пониженный", details: "На 14% ниже среднего риска" },
        { group: "AB", risk: "средний", details: "Близко к среднему популяционному риску" }
      ]
    },
    {
      id: 6,
      name: "Малярия",
      category: "infectious" as DiseaseCategory,
      description: "Инфекционное заболевание, вызываемое паразитами рода Plasmodium и передающееся через укусы комаров.",
      bloodGroups: [
        { group: "0", risk: "повышенный", details: "На 25% выше среднего риска" },
        { group: "A", risk: "пониженный", details: "На 20% ниже среднего риска" },
        { group: "B", risk: "пониженный", details: "На 17% ниже среднего риска" },
        { group: "AB", risk: "пониженный", details: "На 16% ниже среднего риска" }
      ]
    }
  ];

  const filteredDiseases = diseases.filter(disease => 
    disease.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4 text-primary">Заболевания и группы крови</h1>
            <p className="text-muted-foreground">
              Изучите, как различные группы крови могут влиять на риск развития определенных заболеваний. 
              Помните, что предрасположенность — это лишь статистический фактор, а не приговор.
            </p>
          </div>

          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                type="text" 
                placeholder="Поиск заболеваний..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <Tabs defaultValue="cardiovascular" className="mb-8">
            <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-8">
              <TabsTrigger value="cardiovascular">Сердечно-сосудистые</TabsTrigger>
              <TabsTrigger value="digestive">Пищеварительные</TabsTrigger>
              <TabsTrigger value="oncology">Онкологические</TabsTrigger>
              <TabsTrigger value="infectious">Инфекционные</TabsTrigger>
              <TabsTrigger value="metabolic">Метаболические</TabsTrigger>
            </TabsList>

            {Object.keys(categories).map((category) => (
              <TabsContent key={category} value={category}>
                <Card>
                  <CardHeader>
                    <CardTitle>{categories[category as DiseaseCategory]} заболевания</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {filteredDiseases
                        .filter(disease => disease.category === category)
                        .map(disease => (
                          <AccordionItem key={disease.id} value={`disease-${disease.id}`}>
                            <AccordionTrigger className="text-left">{disease.name}</AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-4 p-2">
                                <p className="text-muted-foreground">{disease.description}</p>
                                <h4 className="font-semibold">Риск по группам крови:</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {disease.bloodGroups.map((bloodGroup, index) => (
                                    <div key={index} className={`p-3 rounded-md ${
                                      bloodGroup.risk === "повышенный" ? "bg-red-50 border border-red-200" :
                                      bloodGroup.risk === "пониженный" ? "bg-green-50 border border-green-200" :
                                      "bg-gray-50 border border-gray-200"
                                    }`}>
                                      <div className="font-semibold">
                                        Группа {bloodGroup.group} - {bloodGroup.risk} риск
                                      </div>
                                      <div className="text-sm text-muted-foreground">
                                        {bloodGroup.details}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      {filteredDiseases.filter(disease => disease.category === category).length === 0 && (
                        <p className="text-muted-foreground py-4">Заболевания не найдены</p>
                      )}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-3">Важное примечание</h2>
            <p className="mb-3">
              Данные о связи группы крови с риском заболеваний основаны на статистических исследованиях и не являются абсолютными.
              Множество других факторов, таких как образ жизни, питание, физическая активность и генетика, играют значительную роль 
              в развитии заболеваний.
            </p>
            <p>
              Информация на этом сайте предоставлена исключительно в образовательных целях и не заменяет консультацию с медицинским специалистом.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Diseases;
