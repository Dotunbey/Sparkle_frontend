import React, { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Briefcase, TrendingUp, BookOpen, Heart, ExternalLink, Map } from "lucide-react";
import RoadmapView from "./RoadmapView";

export default function PathDetailSheet({ path, open, onOpenChange }) {
  const [activeTab, setActiveTab] = useState("overview");

  if (!path) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="overflow-y-auto w-full sm:max-w-2xl">
        <SheetHeader className="pb-6 border-b border-slate-100">
          <div className="space-y-3">
            <Badge className="bg-indigo-100 text-indigo-700 border-indigo-200 text-xs">
              {path.domain}
            </Badge>
            <SheetTitle className="text-2xl font-bold text-slate-900">
              {path.title}
            </SheetTitle>
            {path.subdomain && (
              <p className="text-sm text-slate-500">{path.subdomain}</p>
            )}
          </div>
        </SheetHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="py-6">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="roadmap">
              <Map className="w-4 h-4 mr-2" />
              Roadmap
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Description */}
            <div>
              <p className="text-sm text-slate-600 leading-relaxed">{path.description}</p>
            </div>

          {/* Quick Stats */}
          {path.avg_salary_range && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Salary Range</span>
              </div>
              <span className="text-sm font-semibold text-slate-700">{path.avg_salary_range}</span>
            </div>
          )}

          {/* Skills */}
          {path.skills_required?.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-500" />
                Skills Required
              </h4>
              <div className="flex flex-wrap gap-2">
                {path.skills_required.map((skill) => (
                  <Badge key={skill} variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200 text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Personality */}
          {path.personality_traits?.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-500" />
                Best Suited For
              </h4>
              <div className="flex flex-wrap gap-2">
                {path.personality_traits.map((trait) => (
                  <Badge key={trait} variant="outline" className="bg-rose-50 text-rose-700 border-rose-200 text-xs">
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Resources */}
          {path.learning_resources?.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-emerald-500" />
                Learning Resources
              </h4>
              <div className="space-y-2">
                {path.learning_resources.map((res, i) => (
                  <a
                    key={i}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100 hover:bg-indigo-50 hover:border-indigo-200 transition-all group"
                  >
                    <div>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-700">{res.name}</span>
                      {res.type && <span className="text-xs text-slate-400 ml-2">({res.type})</span>}
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </TabsContent>

          <TabsContent value="roadmap">
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-2">Learning Path</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Follow this roadmap to master {path.title}. Each phase builds on the previous one.
              </p>
            </div>
            <RoadmapView roadmap={path.roadmap} />
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
