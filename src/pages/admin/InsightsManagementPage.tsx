
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PlusCircle, MoreHorizontal, Search, Upload, X } from "lucide-react";
import { useState } from "react";

const InsightsManagementPage = () => {
  const [insights, setInsights] = useState([
    { title: "Market Trends Q3 2025", author: "John Doe", date: "2025-09-30", status: "Published", type: "Article" },
    { title: "The Future of AI in Finance", author: "Jane Smith", date: "2025-10-15", status: "Published", type: "PDF" },
    { title: "Navigating Volatile Markets", author: "Peter Jones", date: "2025-10-25", status: "Draft", type: "Article" },
  ]);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedInsight, setSelectedInsight] = useState(null);
  const [contentType, setContentType] = useState("article");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleEditClick = (insight) => {
    setSelectedInsight(insight);
    setContentType(insight.type.toLowerCase());
    setIsEditDialogOpen(true);
  };

  const handleDeleteClick = (insight) => {
    setSelectedInsight(insight);
    setIsDeleteDialogOpen(true);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">Insights</h1>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Insight
        </Button>
      </div>
      <Tabs defaultValue="all">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search insights..." className="pl-8" />
            </div>
          </div>
        </div>
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Insights</CardTitle>
              <CardDescription>Manage your articles and publications.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead><span className="sr-only">Actions</span></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {insights.map((insight) => (
                    <TableRow key={insight.title}>
                      <TableCell className="font-medium">{insight.title}</TableCell>
                      <TableCell>{insight.author}</TableCell>
                      <TableCell>{insight.date}</TableCell>
                      <TableCell>{insight.status}</TableCell>
                      <TableCell>{insight.type}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => handleEditClick(insight)}>Edit</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleDeleteClick(insight)}>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        {/* Add content for other tabs as needed */}
      </Tabs>

      {/* Add Insight Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Add New Insight</DialogTitle>
            <DialogDescription>Fill in the details to create a new insight.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">Title</Label>
              <Input id="title" placeholder="e.g. Market Trends Q4 2025" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="author" className="text-right">Author</Label>
              <Input id="author" placeholder="John Doe" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Image</Label>
              <div className="col-span-3">
                {!imagePreview ? (
                  <Label htmlFor="image-upload" className="border border-dashed rounded-lg p-4 text-center hover:border-primary cursor-pointer w-full block">
                    <Upload className="mx-auto h-8 w-8 text-muted-foreground"/>
                    <p className="text-sm text-muted-foreground mt-2">Click or drag to upload</p>
                    <Input id="image-upload" type="file" className="sr-only" onChange={handleImageChange} accept="image/*" />
                  </Label>
                ) : (
                  <div className="relative">
                    <img src={imagePreview} alt="Image Preview" className="rounded-lg w-full object-cover" />
                    <Button variant="destructive" size="icon" className="absolute top-2 right-2 h-6 w-6" onClick={() => { setImagePreview(null); setSelectedImage(null); }}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Content</Label>
              <div className="col-span-3">
                <RadioGroup defaultValue="article" onValueChange={setContentType} className="flex space-x-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="article" id="r1" />
                    <Label htmlFor="r1">Write Article</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="upload" id="r2" />
                    <Label htmlFor="r2">Upload File</Label>
                  </div>
                </RadioGroup>
                {contentType === 'article' ? (
                  <Textarea placeholder="Write your insight here..." className="h-32" />
                ) : (
                  <>
                    {!selectedFile ? (
                      <Label htmlFor="file-upload" className="border border-dashed rounded-lg p-4 text-center hover:border-primary cursor-pointer w-full block">
                        <Upload className="mx-auto h-8 w-8 text-muted-foreground"/>
                        <p className="text-sm text-muted-foreground mt-2">Click or drag to upload PDF/DOCX</p>
                        <Input id="file-upload" type="file" accept=".pdf,.doc,.docx" className="sr-only" onChange={handleFileChange} />
                      </Label>
                    ) : (
                      <div className="flex items-center justify-between rounded-lg border bg-background p-3">
                        <p className="text-sm font-medium truncate">{selectedFile.name}</p>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setSelectedFile(null)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={() => setIsAddDialogOpen(false)}>Save Draft</Button>
            <Button onClick={() => setIsAddDialogOpen(false)}>Publish</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Insight Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Edit Insight</DialogTitle>
            <DialogDescription>Update the details of the insight.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {/* Fields for editing, pre-filled with selectedInsight data */}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={() => setIsEditDialogOpen(false)}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Insight Alert Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the insight.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => setIsDeleteDialogOpen(false)}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default InsightsManagementPage;
